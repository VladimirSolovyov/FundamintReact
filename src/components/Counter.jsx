import React, { useState } from 'react'

const Counter = () => {
	const [counter, setCounter] = useState(0)

	return (
		<div>
			<h3>{counter}</h3>
			<button onClick={() => setCounter(counter + 1)}>+</button>
			<button onClick={() => setCounter(counter - 1)}>-</button>
		</div>
	)
}

export default Counter
