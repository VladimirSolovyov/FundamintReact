import React from 'react'

class ClassCounter extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			counter: 0,
		}
		this.increment = this.increment.bind(this)
		this.decrement = this.decrement.bind(this)
	}

	increment() {
		this.setState({ counter: this.state.counter + 1 })
	}
	decrement() {
		this.setState({ counter: this.state.counter - 1 })
	}

	render() {
		return (
			<div>
				<h3>{this.state.counter}</h3>
				<button onClick={this.increment}>+</button>
				<button onClick={this.decrement}>-</button>
			</div>
		)
	}
}

export default ClassCounter
