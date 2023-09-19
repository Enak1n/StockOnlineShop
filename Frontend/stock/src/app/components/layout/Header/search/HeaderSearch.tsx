import { SearchOutlined } from '@ant-design/icons'

const HeaderSearch = () => {
	return (
		<div className='border border-gray-400 relative hover:border-black ease-in duration-100'>
			<div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
				<SearchOutlined/>
			</div>
			<input className='pl-10 pr-3 w-[1000px] h-[35px]' />
		</div>
	)
}

export default HeaderSearch
