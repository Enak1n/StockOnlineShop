import { FC, useState } from 'react'
import { AiFillEye, AiFillEyeInvisible, AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import AuthService from '../../../services/AuthService'

interface ISignUpData {
	firstName: string
	lastName: string
	emailAddress: string
	password: string
}

const SignUp = () => {
	const [passwordError, setPasswordError] = useState(null)
	const [emailAddressError, setEmailAddressError] = useState(null)
	const [firstNameError, setFirstNameError] = useState(null)
	const [lastNameError, setLastNameError] = useState(null)

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [emailAddress, setEmailAddress] = useState('')
	const [password, setPassword] = useState('')

	const [isHide, setIsHide] = useState(true)

	const handleSignUp = async (event: React.FormEvent) => {
		event.preventDefault()

		const payload: ISignUpData = {
			firstName: firstName,
			lastName: lastName,
			emailAddress: emailAddress,
			password: password,
		}

		try {
			const response = await AuthService.register(
				payload.firstName,
				payload.lastName,
				payload.emailAddress,
				payload.password
			)
			return response.data
		} catch (e: any) {
			const errorData = e.response.data
			setPasswordError(
				errorData.errors.Password ? errorData.errors.Password : null
			)
			setEmailAddressError(
				errorData.errors.EmailAddress ? errorData.errors.EmailAddress : null
			)
			setFirstNameError(
				errorData.errors.FirstName ? errorData.errors.FirstName : null
			)
			setLastNameError(
				errorData.errors.LastName ? errorData.errors.LastName : null
			)
		}
	}

	return (
		<div>
			{firstNameError && (
				<p className='text-red-500 flex flex-left ml-4 mb-2 mt-2 text-xs font-bold '>
					{firstNameError}
				</p>
			)}
			<input
				className='border border-zinc-300 w-[350px] mb-3 h-[50px] placeholder:text-stone-600 p-3 focus:border-zinc-900 focus:outline-none'
				placeholder='First Name'
				value={firstName}
				onChange={e => {
					const valueWithoutSpaces = e.target.value.replace(/\s/g, '')
					setFirstName(valueWithoutSpaces)
					setFirstNameError(null)
				}}
			></input>
			<div>
				{lastNameError && (
					<p className='text-red-500 flex flex-left ml-4 mb-2 mt-2 text-xs font-bold '>
						{lastNameError}
					</p>
				)}
				<input
					className='border border-zinc-300 w-[350px] mb-3 h-[50px] placeholder:text-stone-600 p-3 focus:border-zinc-900 focus:outline-none'
					placeholder='Last Name'
					value={lastName}
					onChange={e => {
						const valueWithoutSpaces = e.target.value.replace(/\s/g, '')
						setLastName(valueWithoutSpaces)
						setLastNameError(null)
					}}
				></input>
			</div>
			{emailAddressError && (
				<p className='text-red-500 flex flex-left ml-4 mb-2 mt-2 text-xs font-bold '>
					{emailAddressError}
				</p>
			)}
			<input
				className='border border-zinc-300 w-[350px] mb-3 h-[50px] placeholder:text-stone-600 p-3 focus:border-zinc-900 focus:outline-none'
				placeholder='Email Address'
				value={emailAddress}
				onChange={e => {
					const valueWithoutSpaces = e.target.value.replace(/\s/g, '')
					setEmailAddress(valueWithoutSpaces)
					setEmailAddressError(null)
				}}
			></input>
			<div className='relative'>
				{passwordError && (
					<p className='text-red-500 flex flex-left ml-4 mb-2 mt-2 text-xs font-bold '>
						{passwordError}
					</p>
				)}
				<div className='relative'>
					<input
						className='border border-zinc-300 w-[350px] h-[50px] placeholder:text-stone-600 p-3 pr-10 focus:border-zinc-900 focus:outline-none' // Добавляем правый отступ для кнопки
						placeholder='Password'
						value={password}
						onChange={e => {
							const valueWithoutSpaces = e.target.value.replace(/\s/g, '')
							setPassword(valueWithoutSpaces)
							setPasswordError(null)
						}}
						type={isHide ? 'password' : 'text'}
					/>
					<button
						type='button'
						onClick={() => {
							setIsHide(!isHide)
						}}
						className='absolute top-0 right-0 h-full pr-7' // Абсолютное позиционирование и выравнивание справа
					>
						{!isHide ? (
							<span className='w-7 h-7'>
								<AiFillEye />
							</span>
						) : (
							<span className='w-7 h-7'>
								<AiFillEyeInvisible />
							</span>
						)}
					</button>
				</div>
			</div>

			<p className='font-bold text-xs m-3'>
				At least 8 characters, 1 uppercase letter, 1 number and 1 symbol
			</p>

			<button
				className='mt-1 text-zinc-50 bg-zinc-950 w-full font-bold h-[50px] rounded'
				onClick={handleSignUp}
				type='submit'
			>
				Sign Up
			</button>

		</div>
	)
}

export default SignUp
