import { useState, FC } from 'react'
import { AiFillEye, AiFillEyeInvisible, AiOutlineUser } from 'react-icons/ai'
import AuthService from '../../../services/AuthService'

interface ILogInData {
	emailAddress: string
	password: string
}

const LogIn = () => {
	const [isHide, setIsHide] = useState(true)
	const [emailAddress, setEmailAddress] = useState('')
	const [password, setPassword] = useState('')

	const [error, setError] = useState('')

	const handleLogIn = async (event: React.FormEvent) => {
		event.preventDefault()

		const payload: ILogInData = {
			emailAddress: emailAddress,
			password: password,
		}

		try {
			const response = await AuthService.login(
				payload.emailAddress,
				payload.password
			)
			window.location.href = '/'
		} catch (e: any) {
			setError(e.response.data)
		}
	}
	return (
		<div>
			<div>
				<input
					className='border border-zinc-300 w-[350px] mb-3 h-[50px] placeholder:text-stone-600 p-3 focus:border-zinc-900 focus:outline-none'
					placeholder='Email Address'
					onChange={e => {
						const valueWithoutSpaces = e.target.value.replace(/\s/g, '')
						setEmailAddress(valueWithoutSpaces)
						setError('')
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
						setError('')
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
				{error && (
					<p className='text-red-500 flex flex-left mb-2 mt-2 text-xs font-bold '>
						{error}
					</p>
				)}
			</div>

			<button
				className='mt-5 text-zinc-50 bg-zinc-950 w-full font-bold h-[50px] rounded '
				onClick={handleLogIn}
			>
				Log In
			</button>
		</div>
	)
}

export default LogIn
