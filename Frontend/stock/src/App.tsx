import React from 'react'
import './App.css'
import Header from './app/components/layout/Header/Header'
import Auth from './pages/authorization/Auth'
import AppRouter from './app/components/AppRouter'
import { BrowserRouter } from 'react-router-dom'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</div>
	)
}

export default App
