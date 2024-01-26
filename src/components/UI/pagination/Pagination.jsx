import React from 'react'
import { usePagination } from '../../../hooks/usePagination'

const Pagination = ({ totalPages, page, changePage }) => {
	const pageArray = usePagination(totalPages)
	return (
		<div className='page__wrapper'>
			{pageArray.map(p => (
				<span
					key={p}
					className={page === p ? 'page page_current' : 'page'}
					onClick={() => {
						changePage(p)
					}}
				>
					{p}
				</span>
			))}
		</div>
	)
}

export default Pagination
