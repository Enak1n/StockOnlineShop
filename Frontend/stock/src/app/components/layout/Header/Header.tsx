import { FC } from 'react'
import HeaderSearch from './search/HeaderSearch'
import Navigation from './navigation/Navigation'

const Header: FC = () => {
	return (
		<div className='border-b-gray-400 border flex items-center justify-between'>
			<img
				className='w-[160px] flex justify-start pl-10'
				src='/images/StockX-Logo.svg'
				alt='Logo'
			/>
			<HeaderSearch />
			<Navigation />
		</div>
	)
}

export default Header
