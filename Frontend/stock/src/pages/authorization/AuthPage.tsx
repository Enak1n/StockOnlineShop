import { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible, AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const AuthPage = () => {
	const [isHide, setIsHide] = useState(true)
	const [isLogIn, setIsLogIn] = useState(true)

	return (
		<div className='flex justify-center items-center h-screen'>
			<form className='border border-gray-300 p-4 text-center'>
				<Link to='/'>
					<img
						src='/images/StockX-Logo.png'
						className='w-[180px] mx-auto mb-4 ml-30'
						alt='Logo'
					/>
				</Link>
				{isLogIn && (
					<div className='flex justify-center m-5'>
						<button
							className='font-bold p-4 text-zinc-500'
							onClick={() => setIsLogIn(false)}
						>
							Sign Up
						</button>
						<div className='border-b-2 border-zinc-900'>
							<button className='p-4 font-bold relative'>Log In</button>
						</div>
					</div>
				)}
				{!isLogIn && (
					<div className='flex justify-center m-5'>
						<div className='border-b-2 border-zinc-900'>
							<button className='p-4 font-bold relative'>Sign Up</button>
						</div>
						<button
							className='font-bold p-4 text-zinc-500'
							onClick={() => setIsLogIn(true)}
						>
							Log In
						</button>
					</div>
				)}
				{isLogIn && (
					<div>
					<div>
					<input
						className='border border-zinc-300 w-[350px] mb-3 h-[40px] placeholder:text-stone-600 p-3'
						placeholder='Email Address'
					></input>
					</div>
					<div className='relative'>
						<input
							className='border border-zinc-300 w-[350px] h-[40px] placeholder:text-stone-600 p-3'
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
					<span className='text-xs'>Need an acount? </span>
				<a className='text-xs text-green-700 underline' href=''>
					Sign Up
				</a>
				</div>
				)}
				
				{!isLogIn && (
					<div>
					<input
						className='border border-zinc-300 w-[350px] mb-3 h-[40px] placeholder:text-stone-600 p-3'
						placeholder='First Name'
					></input>
					<div>
					<input
						className='border border-zinc-300 w-[350px] mb-3 h-[40px] placeholder:text-stone-600 p-3'
						placeholder='Last Name'
					></input>
					</div>
					<input
						className='border border-zinc-300 w-[350px] mb-3 h-[40px] placeholder:text-stone-600 p-3'
						placeholder='Email Address'
					></input>
					<div className='relative'>
						<input
							className='border border-zinc-300 w-[350px] h-[40px] placeholder:text-stone-600 p-3'
							placeholder='Password'
							type={isHide ? 'password' : 'text'}
						></input>
						<button
							type='button'
							onClick={() => {
								setIsHide(!isHide)
							}}
							className='absolute top-[14.5px] right-[30px]'
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

					<p className='font-bold text-xs m-3'>At least 8 characters, 1 uppercase letter, 1 number and 1 symbol</p>

					<button className='mt-1 text-zinc-50 bg-zinc-950 w-full font-bold h-[50px] rounded'>
						Sign Up
					</button>
					<span className='text-xs'>Already have an account? </span>
				<a className='text-xs text-green-700 underline' href=''>
					Log In
				</a>
					</div>
				)}
			</form>
		</div>
	)
}

export default AuthPage