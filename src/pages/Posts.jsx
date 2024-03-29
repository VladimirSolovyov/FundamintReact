import React, { useEffect, useState, useRef } from 'react'
import '../styles/App.css'

import { usePosts } from '../hooks/usePosts'
import { useFetching } from '../hooks/useFetching'
import { getPageCount } from '../utils/pages'

import PostService from '../API/PostService'
import Loader from '../components/UI/Loader/Loader'
import Pagination from '../components/UI/pagination/Pagination'
import PostList from '../components/PostList'
import PostForm from '../components/PostForm'
import PostFilter from '../components/PostFilter'
import MyModal from '../components/UI/MyModal/MyModal'
import MyButton from '../components/UI/button/MyButton'
import { useObserver } from '../hooks/useObserver'
import MySelect from '../components/UI/select/MySelect'

function Posts() {
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const [modal, setModal] = useState(false)
	const [totalPages, setTotalPages] = useState(0)
	const [limit, setLimit] = useState(10)
	const [page, setPage] = useState(1)
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
	const lastElement = useRef()
	const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page)
		setPosts([...posts, ...response.data])
		const totalCount = response.headers['x-total-count']
		setTotalPages(getPageCount(totalCount, limit))
	})

	const createPost = newPost => {
		setPosts([...posts, newPost])
		setModal(false)
	}

	useObserver(lastElement, page < totalPages, isPostsLoading, () => {
		setPage(page + 1)
	})

	useEffect(() => {
		fetchPosts()
	}, [page, limit])

	const removePost = idPost => {
		setPosts(posts.filter(p => p.id !== idPost))
	}

	const changePage = page => {
		setPage(page)
	}

	return (
		<div className='App'>
			<MyButton
				style={{ marginTop: '20px', marginBottom: '20px' }}
				onClick={() => setModal(true)}
			>
				Создать пользователя
			</MyButton>
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</MyModal>
			<PostFilter filter={filter} setFilter={setFilter} />
			<hr style={{ margin: '15px 0' }} />
			<MySelect
				value={limit}
				onChange={value => setLimit(value)}
				defaultValue='Количество элементов на странице'
				options={[
					{ value: 5, name: '5' },
					{ value: 10, name: '10' },
					{ value: 25, name: '25' },
					{ value: 50, name: '50' },
					{ value: -1, name: 'Все' },
				]}
			/>
			{postError && <h3>Ошибка загрузки ${postError}</h3>}
			<PostList
				posts={sortedAndSearchedPosts}
				title={'Список постов'}
				remove={removePost}
			/>
			<div ref={lastElement} style={{ height: 15, background: 'teal' }} />
			{isPostsLoading && (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						marginTop: '30px',
					}}
				>
					<Loader />
				</div>
			)}
			<Pagination totalPages={totalPages} page={page} changePage={changePage} />
		</div>
	)
}

//(1.49.52 = useFetching) https://www.youtube.com/watch?v=GNrdg3PzpJQ&t=25s&ab_channel=UlbiTV

export default Posts
