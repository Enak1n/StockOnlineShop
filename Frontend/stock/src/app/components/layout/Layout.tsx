import Header from './Header/Header'
import Footer from './footer/Footer'
import { FC } from 'react'

interface ILayoutProps {
	children: any
}
const Layout: FC<ILayoutProps> = ({ children }) => {
	return (
		<>
			<div>
				<Header />
				<Footer />
			</div>
			<main>{children}</main>
		</>
	)
}

export default Layout