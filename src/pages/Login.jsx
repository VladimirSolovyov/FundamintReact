import React, { useContext } from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButton from '../components/UI/button/MyButton'
import { AuthContext } from '../context'

const Login = () => {
	const { setIsAuth } = useContext(AuthContext)
	const login = event => {
		event.preventDefault()
		setIsAuth(true)
		localStorage.setItem('auth', true)
	}

	return (
		<div>
			<h1>Страница авторизации</h1>
			<form onSubmit={login}>
				<MyInput type='text' placeholder='login' />
				<MyInput type='password' placeholder='password' />
				<MyButton>Войти</MyButton>
			</form>
		</div>
	)
}

export default Login
