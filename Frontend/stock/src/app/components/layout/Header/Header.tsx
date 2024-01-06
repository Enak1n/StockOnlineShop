import { FC } from 'react'
import HeaderSearch from './search/HeaderSearch'
import Navigation from './navigation/Navigation'
import Nav from '../../Nav'

const Header: FC = () => {
	return (
		<div className='border-b-gray-400 border flex items-center justify-between z-50 fixed w-full bg-white'>
			<img
				className='w-[150px] flex justify-start ml-2'
				src='/images/StockX-Logo.png'
				alt='Logo'
			/>
			<HeaderSearch />
			<Navigation />
		</div>
	)
}

export default Header
