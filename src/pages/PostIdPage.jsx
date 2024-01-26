import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import { useFetching } from '../hooks/useFetching'
import Loader from '../components/UI/Loader/Loader'

const PostIdPage = () => {
	const params = useParams()
	const [post, setPost] = useState({})
	const [comments, setComments] = useState([])
	const [fetchPostsById, isLoading, error] = useFetching(async () => {
		const response = await PostService.getById(params.id)
		setPost(response.data)
	})

	const [fetchPostsByIdComments, isLoadingCom, errorCom] = useFetching(
		async () => {
			const response = await PostService.getByIdComment(params.id)
			setComments(response.data)
		}
	)

	useEffect(() => {
		fetchPostsById()
		fetchPostsByIdComments()
	}, [])

	return (
		<div>
			<h1>Вы открыли страницу поста c ID = {params.id}</h1>
			{isLoading ? (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						marginTop: '30px',
					}}
				>
					<Loader />
				</div>
			) : (
				<h3 style={{ marginTop: '20px' }}>
					{post.id}. {post.title}
				</h3>
			)}
			<h3 style={{ marginTop: '20px' }}>Комментарии</h3>

			{isLoadingCom ? (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						marginTop: '30px',
					}}
				>
					<Loader />
				</div>
			) : (
				comments.map((com, index) => (
					<div key={index} style={{ marginTop: '5px' }}>
						<h5>{com.email}</h5>
						<div>{com.body}</div>
					</div>
				))
			)}
		</div>
	)
}

export default PostIdPage
