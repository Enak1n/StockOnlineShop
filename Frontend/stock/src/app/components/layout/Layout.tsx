import Header from './Header/Header'
import Footer from './footer/Footer'
import { FC } from 'react'

interface ILayoutProps {
	children: any
	hide: any
}
const Layout: FC<ILayoutProps> = ({ children, hide }) => {
	console.log('hui', hide)
	return (
		<>
			<div>
				{!hide && <Header />}			
				<Footer />
			</div>
			<main>{children}</main>
		</>
	)
}

export default Layout