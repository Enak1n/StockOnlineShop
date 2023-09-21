import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import LogIn from '../../app/components/authForm/LogIn'
import SignUp from '../../app/components/authForm/SignUp'

const AuthPage = () => {
	const [isLogIn, setIsLogIn] = useState(true)

	const handleSignUp = async (event: React.FormEvent) => {
		event.preventDefault()
	}

	return (
		<div className='flex justify-center items-center h-screen'>
			<form
				className='border border-gray-300 p-4 text-center'
				onSubmit={handleSignUp}
			>
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
				{isLogIn && <LogIn />}

				{!isLogIn && <SignUp />}
				{isLogIn && (
					<div>
						<span className='text-xs'>Need an acount? </span>
						<a
							className='text-xs text-green-700 underline'
							onClick={e => {
								setIsLogIn(false)
							}}
						>
							Sign Up
						</a>
					</div>
				)}
				{!isLogIn && (
					<div>
						<span className='text-xs'>Already have an account? </span>
						<a
							className='text-xs text-green-700 underline'
							onClick={e => {
								setIsLogIn(true)
							}}
						>
							Log In
						</a>
					</div>
				)}
			</form>
		</div>
	)
}

export default AuthPage