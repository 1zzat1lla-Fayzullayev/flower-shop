import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../routes/Home'
import SingleFlower from '../routes/SingleFlower'
import Category from '../routes/Category'
import AllFlowers from '../routes/AllFlowers'

import Header from '../components/Header'
import Footer from '../components/Footer'
import GetOrder from '../components/GetOrder'

function Layout() {
	return (
		<>
			<Header />
			<GetOrder />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='allflowers' element={<AllFlowers />} />
				<Route path='flower/:id' element={<SingleFlower />} />
				<Route path='category/:id' element={<Category />} />
			</Routes>
			<Footer />
		</>
	)
}

export default Layout
