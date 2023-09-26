import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRouter from './app/components/AppRouter'
import Layout from './app/components/layout/Layout'
import { useState } from 'react'

function App() {
	const [userError, setUserError] = useState('')
	return (
		<div className='App'>
					<Layout>
						<AppRouter />
					</Layout>
		</div>
	)
}

export default App
