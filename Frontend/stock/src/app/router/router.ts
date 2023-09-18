import Auth from "../../pages/authorization/Auth";
import Header from "../components/layout/Header/Header";

export const publicRoutes = [
	{ path: '/auth', component: Auth, exact: true },
	{ path: '/', component: Header, exact: true },
]