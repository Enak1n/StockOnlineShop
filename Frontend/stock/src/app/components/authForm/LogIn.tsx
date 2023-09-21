import { useState, FC } from 'react'
import { AiFillEye, AiFillEyeInvisible, AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const LogIn = () => {
	const [isHide, setIsHide] = useState(true)
	const [emailAddress, setEmailAddress] = useState('')
	const [password, setPassword] = useState('')
	return (
		<div>
			<div>
				<input
					className='border border-zinc-300 w-[350px] mb-3 h-[50px] placeholder:text-stone-600 p-3 focus:border-zinc-900 focus:outline-none'
					placeholder='Email Address'
					onChange={e => {
						const valueWithoutSpaces = e.target.value.replace(/\s/g, '')
						setEmailAddress(valueWithoutSpaces)
					}}
				></input>
			</div>
			<div className='relative'>
				<input
					className='border border-zinc-300 w-[350px] h-[50px] placeholder:text-stone-600 p-3 focus:border-zinc-900 focus:outline-none'
					placeholder='Password'
					onChange={e => {
						const valueWithoutSpaces = e.target.value.replace(/\s/g, '')
						setPassword(valueWithoutSpaces)
					}}
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
			<button className='mt-5 text-zinc-50 bg-zinc-950 w-full font-bold h-[50px] rounded '>
				Log In
			</button>
		</div>
	)
}

export default LogIn
