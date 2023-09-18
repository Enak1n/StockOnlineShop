import { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible, AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Auth = () => {
	const [isHide, setIsHide] = useState(true)

	return (
		<div className='flex justify-center items-center h-screen'>
			<form className='border border-gray-300 p-4 text-center'>
				<Link to='/'>
					<img
						src='/images/StockX-Logo1.png'
						className='w-[180px] mx-auto mb-4 ml-30'
						alt='Logo'
					/>
				</Link>
				<div className='flex justify-center m-5'>
					<button className='font-bold p-4 text-zinc-500'>Sign Up</button>
					<button className='p-4 font-bold relative'>
						Log In
						<div className='absolute bottom-0 left-0 w-full h-0.5 bg-black'></div>
					</button>
				</div>
				<div>
					<input
						className='border border-zinc-300 w-full mb-3 h-[40px] placeholder:text-stone-600 p-3'
						placeholder='Email Address'
					></input>
					<div className='relative'>
						<input
							className='border border-zinc-300 w-[300px] h-[40px] placeholder:text-stone-600 p-3'
							placeholder='Password'
							type={isHide ? 'password' : 'text'}
						></input>
						<button
							type='button'
							onClick={() => {
								setIsHide(!isHide)
							}}
							className='absolute top-[14.5px] right-[16px]'
						>
							{!isHide ? (
								<span className='w-7 h-7 text-stone-400'>
									<AiFillEyeInvisible />
								</span>
							) : (
								<span className='w-7 h-7'>
									<AiFillEye />
								</span>
							)}
						</button>
					</div>
					<button className='mt-5 text-zinc-50 bg-zinc-950 w-full font-bold h-[50px] rounded'>
						Log In
					</button>
				</div>

				<span className='text-xs'>Need an acount? </span>
				<a className='text-xs text-green-700 underline' href=''>
					Sign Up
				</a>
			</form>
		</div>
	)
}

export default Auth
