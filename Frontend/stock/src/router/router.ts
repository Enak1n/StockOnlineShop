import AuthPage from '../pages/authorization/AuthPage'
import Header from '../app/components/layout/Header/Header'
import MainPage from '../pages/MainPage'

export const publicRoutes = [
	{ path: '/auth', component: AuthPage, exact: true },
	{ path: '/', component: MainPage, exact: true },
]
