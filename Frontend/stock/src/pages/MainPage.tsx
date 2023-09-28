import { Link } from 'react-router-dom'
import Nav from '../app/components/Nav'
import { QuestionCircleOutlined } from '@ant-design/icons'

const MainPage = () => {
	return (
		<div className='mx-auto pt-4 w-[1264px]'>
			<Nav />

			<div className='p-[250px]'>{/* Carousel */}</div>

			<div className='mx-auto flex'>
				<h2 className='items-center font-lobster'>Recommend For You</h2>
				<QuestionCircleOutlined className='ml-2 cursor-pointer'/>
			</div>
		</div>
	)
}

export default MainPage
