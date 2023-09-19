import { FC } from 'react'
import HeaderSearch from './search/HeaderSearch'
import Navigation from './navigation/Navigation'

const Header: FC = () => {
	return (
		<div className='border-b-gray-400 border flex items-center justify-between'>
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
