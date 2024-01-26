import React from 'react'
import PostItem from './PostItem'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const PostList = ({ posts, title, remove }) => {
	if (!posts.length) {
		return <h1 style={{ textAlign: 'center' }}>Постов нет!</h1>
	}
	return (
		<div>
			<h3 style={{ textAlign: 'center' }}>{title}</h3>
			<TransitionGroup>
				{posts.map((post, index) => (
					<CSSTransition key={post.id} timeout={500} classNames='post'>
						<PostItem post={post} index={index} remove={remove} />
					</CSSTransition>
				))}
			</TransitionGroup>
		</div>
	)
}

export default PostList
