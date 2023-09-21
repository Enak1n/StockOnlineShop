import { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible, AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import AuthService from '../../services/AuthService'

interface ISignUpData {
	firstName: string
	lastName: string
	emailAddress: string
	password: string
}

const AuthPage = () => {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [emailAddress, setEmailAddress] = useState('')

	const [password, setPassword] = useState('')
	const [isHide, setIsHide] = useState(true)
	const [isLogIn, setIsLogIn] = useState(true)

	const [passwordError, setPasswordError] = useState(null)
	const [emailAddressError, setEmailAddressError] = useState(null)
	const [firstNameError, setFirstNameError] = useState(null)
	const [lastNameError, setLastNameError] = useState(null)

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
				const errorData = e.response.data;
				  setPasswordError(errorData.errors.Password ? errorData.errors.Password : null)
				  setEmailAddressError(errorData.errors.EmailAddress ? errorData.errors.EmailAddress : null)
				  setFirstNameError(errorData.errors.FirstName ? errorData.errors.FirstName : null)
				  setLastNameError(errorData.errors.LastName ? errorData.errors.LastName : null)
				}
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
				{isLogIn && (
					<div>
						<div>
							<input
								className='border border-zinc-300 w-[350px] mb-3 h-[40px] placeholder:text-stone-600 p-3'
								placeholder='Email Address'
								onChange={e => {
									const valueWithoutSpaces = e.target.value.replace(/\s/g, '')
									setEmailAddress(valueWithoutSpaces)
								}}
							></input>
						</div>
						<div className='relative'>
							<input
								className='border border-zinc-300 w-[350px] h-[40px] placeholder:text-stone-600 p-3'
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
						<button className='mt-5 text-zinc-50 bg-zinc-950 w-full font-bold h-[50px] rounded'>
							Log In
						</button>
						<span className='text-xs'>Need an acount? </span>
						<a className='text-xs text-green-700 underline' onClick={e => {
							setIsLogIn(false)
						}} >
							Sign Up
						</a>
					</div>
				)}

				{!isLogIn && (
					<div>
												{lastNameError && (
    <p className='text-red-500 flex flex-left ml-4 mb-2 mt-2 text-xs font-bold '>{lastNameError}</p>
  )}
						<input
							className='border border-zinc-300 w-[350px] mb-3 h-[40px] placeholder:text-stone-600 p-3'
							placeholder='First Name'
							value={firstName}
							onChange={e => {
								const valueWithoutSpaces = e.target.value.replace(/\s/g, '')
								setFirstName(valueWithoutSpaces)
								setFirstNameError(null)
							}}
						></input>
						<div>
						{firstNameError && (
    <p className='text-red-500 flex flex-left ml-4 mb-2 mt-2 text-xs font-bold '>{firstNameError}</p>
  )}
							<input
								className='border border-zinc-300 w-[350px] mb-3 h-[40px] placeholder:text-stone-600 p-3'
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
    <p className='text-red-500 flex flex-left ml-4 mb-2 mt-2 text-xs font-bold '>{emailAddressError}</p>
  )}
						<input
							className='border border-zinc-300 w-[350px] mb-3 h-[40px] placeholder:text-stone-600 p-3'
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
    <p className='text-red-500 flex flex-left ml-4 mb-2 mt-2 text-xs font-bold '>{passwordError}</p>
  )}
  <div className='relative'>
    <input
      className='border border-zinc-300 w-[350px] h-[40px] placeholder:text-stone-600 p-3 pr-10' // Добавляем правый отступ для кнопки
      placeholder='Password'
      value={password}
      onChange={e => {
        const valueWithoutSpaces = e.target.value.replace(/\s/g, '');
        setPassword(valueWithoutSpaces);
		setPasswordError(null)
      }}
      type={isHide ? 'password' : 'text'}
    />
    <button
      type='button'
      onClick={() => {
        setIsHide(!isHide);
      }}
      className='absolute top-0 right-0 h-full pr-7' // Абсолютное позиционирование и выравнивание справа
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
						<span className='text-xs'>Already have an account? </span>
						<a className='text-xs text-green-700 underline' onClick={e => {
							setIsLogIn(true)
						}}>
							Log In
						</a>
					</div>
				)}
			</form>
		</div>
	)
}

export default AuthPage