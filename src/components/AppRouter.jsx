import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../router'
import { AuthContext } from '../context'

const AppRouter = () => {
	const { isAuth } = useContext(AuthContext)

	return isAuth ? (
		<Routes>
			{privateRoutes.map((route, index) => (
				<Route
					key={index}
					path={route.path}
					element={route.component}
					exact={route.exact}
				/>
			))}
		</Routes>
	) : (
		<Routes>
			{publicRoutes.map((route, index) => (
				<Route
					key={index}
					path={route.path}
					element={route.component}
					exact={route.exact}
				/>
			))}
		</Routes>
	)
}

export default AppRouter
