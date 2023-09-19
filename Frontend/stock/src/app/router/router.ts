import AuthPage from '../../pages/authorization/AuthPage'
import Header from '../components/layout/Header/Header'

export const publicRoutes = [
	{ path: '/auth', component: AuthPage, exact: true },
	{ path: '/', component: Header, exact: true },
]
