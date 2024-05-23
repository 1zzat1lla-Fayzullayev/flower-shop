import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

import Cursor from './shared/Cursor'

import Admin from './admin/Admin'
import Layout from './layout/Layout'
import Tell from './components/Tell'

function App() {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const initApp = async () => {
			await initializeAos()
			setLoading(false)
		}
		initApp()
	}, [])

	const initializeAos = async () => {
		await Aos.init({
			duration: 800,
		})
	}

	return (
		<div>
			<Cursor />
			<BrowserRouter>
				{loading ? (
					<span className='loading loading-ring loading-lg'></span>
				) : (
					<>
						<Routes>
							<Route path='/*' element={<Layout />} />
							<Route path='floweradmin' element={<Admin />} />
						</Routes>
						<Tell />
					</>
				)}
			</BrowserRouter>
		</div>
	)
}

export default App
