import React from 'react'

import MySelect from './UI/select/MySelect'
import MyInput from './UI/input/MyInput'

const PostFilter = ({ filter, setFilter }) => {
	return (
		<div>
			<MyInput
				placeholder='Поиск...'
				value={filter.query}
				onChange={e => setFilter({ ...filter, query: e.target.value })}
			/>
			<MySelect
				defaultValue={'Сортировка по'}
				options={[
					{ value: 'title', name: 'По названию' },
					{ value: 'body', name: 'По описанию.' },
				]}
				value={filter.sort}
				onChange={selectSorted => setFilter({ ...filter, sort: selectSorted })}
			/>
		</div>
	)
}

export default PostFilter
