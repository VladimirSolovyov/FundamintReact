import { useMemo } from 'react'

export const usePagination = totalPages => {
	const pageArray = useMemo(() => {
		let arr = []
		for (let i = 0; i < totalPages; i++) {
			arr.push(i + 1)
		}
		return arr
	}, [totalPages])

	return pageArray
}
