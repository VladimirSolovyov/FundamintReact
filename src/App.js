import React, { useEffect, useState } from 'react'
import './styles/App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/UI/Navbar/Navbar'
import AppRouter from './components/AppRouter'
import { AuthContext } from './context'

function App() {
	const [isAuth, setIsAuth] = useState(false)
	useEffect(() => {
		if (localStorage.getItem('auth')) {
			setIsAuth(true)
		}
	}, [])

	return (
		<AuthContext.Provider
			value={{
				isAuth,
				setIsAuth,
			}}
		>
			<BrowserRouter>
				<Navbar />
				<AppRouter />
			</BrowserRouter>
		</AuthContext.Provider>
	)
}

//(2.21.31 = AppRouter) https://www.youtube.com/watch?v=GNrdg3PzpJQ&t=25s&ab_channel=UlbiTV

export default App
