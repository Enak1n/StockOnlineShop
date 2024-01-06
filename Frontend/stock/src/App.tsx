import { BrowserRouter, useLocation } from 'react-router-dom'
import './App.css'
import AppRouter from './app/components/AppRouter'
import Layout from './app/components/layout/Layout'
import { useState, useEffect } from 'react'

function App() {
	const [userError, setUserError] = useState('')
	const location = useLocation();
	const [hideHeader, setHideHeader] = useState(false);
	
	useEffect(() => {
		const currentPath = location.pathname;
		setHideHeader(currentPath === '/auth');
	  }, [location]);

	return (
		<div className='App'>
					<Layout hide={hideHeader}>
						<AppRouter />
					</Layout>
		</div>
	)
}

export default App
