import { BellOutlined } from '@ant-design/icons'
import { FC } from 'react'
import { Link } from 'react-router-dom'


const Navigation: FC = () => {
	return (
		<div className='p-6 pr-40'>
			<ul className='flex'>
				<li>
					<a href='/sneakers' className='p-2.5 hover:text-gray-500'>
						Browse
					</a>
				</li>
				<li>
					<a href='/news' className='p-2.5 hover:text-gray-500'>
						News
					</a>
				</li>
				<li>
					<a href='/about' className='p-2.5 hover:text-gray-500'>
						About
					</a>
				</li>
				<li>
					<a href='/help' className='p-2.5 hover:text-gray-500'>
						Help
					</a>
				</li>
				<li>
					<a href='/sell' className='p-2.5 hover:text-gray-500'>
						Sell
					</a>
				</li>
				<BellOutlined className='pt-1.5 pl-3' />

				<li className='ml-10 border border-gray-900'>
					<Link to='/auth'>
						<button
							className='w-[80px] h-[30px] flex justify-center items-center font-bold hover:hover:bg-zinc-900 hover:text-gray-50 ease-in duration-200'
						>
							Login
						</button>
					</Link>
				</li>

				<li className='ml-3 border border-gray-900'>
					<Link to='/auth'>
						<button className='w-[80px] h-[30px] flex justify-center items-center font-bold text-gray-50 bg-zinc-700 hover:bg-zinc-900 ease-in duration-200'>
							SignUp
						</button>
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default Navigation
