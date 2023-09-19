import { Navigate, Route, Routes } from 'react-router-dom'
import { publicRoutes } from '../../router/router'

const AppRouter = () => {
	return (
		<Routes>
			<>
				{publicRoutes.map(route => (
					<Route
						Component={route.component}
						path={route.path}
						key={route.path}
					/>
				))}
			</>
			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	)
}

export default AppRouter
