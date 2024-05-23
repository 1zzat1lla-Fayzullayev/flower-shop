import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import supabase from '../supabase/client'

function Admin() {
	const [isLoggedIn, setIsLoggedIn] = useState(
		JSON.parse(localStorage.getItem('isLoggedIn')) || false
	)
	const [tab, setTab] = useState(1)
	const [cardData, setCardData] = useState([])

	const [formCard, setFormCard] = useState({
		flowername: '',
		description: '',
		flowerpic: '',
		flowerprice: 0,
	})

	const [editIndex, setEditIndex] = useState(null)

	useEffect(() => {
		fetchCardData()
	}, [])

	const fetchCardData = async () => {
		try {
			const { data, error } = await supabase.from('flower').select('*')
			if (error) console.error(error)
			if (data != null) setCardData(data)
		} catch (err) {
			console.error(err)
		}
	}

	const handleChange = e => {
		const { name, value } = e.target
		setFormCard(prevState => ({ ...prevState, [name]: value }))
	}

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			const { flowername, description, flowerpic, flowerprice } = formCard
			if (!flowername || !description || !flowerpic || !flowerprice)
				throw new Error('Please provide all details for the card.')

			if (editIndex !== null) {
				const { data, error } = await supabase
					.from('flower')
					.update({
						flowername,
						description,
						flowerpic,
						flowerprice,
					})
					.eq('id', cardData[editIndex].id)
				if (error) throw error
				if (data) {
					console.log(data)
					setEditIndex(null)
					setFormCard({
						flowername: '',
						description: '',
						flowerpic: '',
						flowerprice: 0,
					})
				}
			} else {
				const { data, error } = await supabase
					.from('flower')
					.insert({
						flowername,
						description,
						flowerpic,
						flowerprice,
					})
					.single()
				if (error) throw error
				if (data) {
					console.log(data)
					setFormCard({
						flowername: '',
						description: '',
						flowerpic: '',
						flowerprice: 0,
					})
				}
			}

			handleCloseModal(tab)
			window.location.reload()
		} catch (error) {
			console.error('Error submitting form:', error.message)
		}
	}

	const handleEdit = (index, data) => {
		setEditIndex(index)
		setFormCard({
			flowername: data.flowername,
			description: data.description,
			flowerpic: data.flowerpic,
			flowerprice: data.flowerprice,
		})
		const modal = document.getElementById(`my_modal_${tab}`)
		if (modal) modal.showModal()
	}

	const handleDelete = async (id, index) => {
		try {
			const { error } = await supabase.from('flower').delete().eq('id', id)
			if (error) throw error
			const newData = [...cardData]
			newData.splice(index, 1)
			setCardData(newData)
		} catch (error) {
			console.error('Error deleting record:', error.message)
		}
	}

	const handleOpenModal = tab => {
		const modal = document.getElementById(`my_modal_${tab}`)
		if (modal) modal.showModal()
	}

	const handleCloseModal = tab => {
		const modal = document.getElementById(`my_modal_${tab}`)
		if (modal) modal.close()
	}

	useEffect(() => {
		localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn))
	}, [isLoggedIn])

	const handleLogOut = () => {
		localStorage.removeItem('isLoggedIn')
		setIsLoggedIn(false)
	}

	return (
		<>
			{isLoggedIn ? (
				<>
					<div className='flex justify-start flex-col md:flex-row items-start'>
						<div className='w-full md:w-[360px] md:h-screen flex flex-col items-center md:pb-0 pb-[20px] pt-5 shadow-admin'>
							<Link to='/'>
								<h1 className='font-bold cursor-pointer text-white text-[25px]'>
									FlowerSunik
								</h1>
							</Link>
							<div className='mt-[35px] flex flex-col items-start gap-3 w-full px-6'>
								{[1].map(item => (
									<p
										key={item}
										onClick={() => setTab(item)}
										className={`${
											tab === item
												? 'bg-[#458FF6] text-[#fff] font-medium '
												: 'bg-[#ececec50] text-[white] '
										} text-lg rounded-[8px] hover:cursor-pointer hover:translate-x-1.5 transition-all py-[8px] px-[25px] w-full mr-5`}
									>
										Jadval {item}
									</p>
								))}
							</div>
						</div>
						<div className='p-5 w-full md:w-[calc(100%-360px)] min-h-screen overflow-auto'>
							{tab === 1 && (
								<div className='container mx-auto'>
									<div className='flex justify-end items-end'>
										<button
											className='btn bg-[#458FF6] border-[#458FF6] text-white hover:bg-[#458FF6] font-Poppins mr-[20px]'
											onClick={() => handleOpenModal(tab)}
										>
											CardForm
										</button>
										<button
											className='btn btn-error text-white'
											onClick={handleLogOut}
										>
											Chiqish
										</button>
									</div>
									<dialog id={`my_modal_${tab}`} className='modal font-Poppins'>
										<div className='modal-box form_admin'>
											<h3 className='font-bold text-[25px] my-[20px] text-center text-white'>
												Card Form
											</h3>
											<form
												onSubmit={handleSubmit}
												className='flex flex-col gap-4'
											>
												<input
													type='text'
													name='flowername'
													placeholder='Nom'
													className='input bg-[#17171A] text-white'
													value={formCard.flowername}
													onChange={handleChange}
												/>
												<input
													type='text'
													name='description'
													placeholder='Tavsif'
													className='input bg-[#17171A] text-white'
													value={formCard.description}
													onChange={handleChange}
												/>
												<input
													type='text'
													name='flowerpic'
													placeholder='Rasm URL'
													className='input bg-[#17171A] text-white'
													value={formCard.flowerpic}
													onChange={handleChange}
												/>
												<input
													type='number'
													name='flowerprice'
													placeholder='Narx'
													className='input bg-[#17171A] text-white'
													value={formCard.flowerprice}
													onChange={handleChange}
												/>

												<button className='btn btn-success text-white'>
													{editIndex !== null ? 'Yangilash' : 'Yuborish'}
												</button>
											</form>
										</div>
									</dialog>
									<h2 className='text-white font-bold font-Poppins text-[25px] my-[15px]'>
										Flower Section
									</h2>
									<div className='overflow-y-scroll h-[450px]'>
										<table className='table'>
											<thead>
												<tr className='text-white font-Poppins'>
													<th>Gul nomi</th>
													<th>Tavsif</th>
													<th>Rasm</th>
													<th>Narx</th>
												</tr>
											</thead>
											<tbody>
												{cardData.map((item, index) => (
													<tr key={item.id} className='text-white font-Poppins'>
														<td>{item.flowername}</td>
														<td>{item.description}</td>
														<td>
															<img
																src={item.flowerpic}
																alt='404'
																className='w-[100px]'
															/>
														</td>
														<td>{item.flowerprice}</td>
														<td className='flex justify-center items-center gap-2'>
															<button
																className='bg-[orange] p-2 rounded-[6px]'
																onClick={() => handleEdit(index, item)}
															>
																Tahrirlash
															</button>
															<button
																className='bg-red-500 p-2 rounded-[6px]'
																onClick={() => handleDelete(item.id, index)}
															>
																O'chirish
															</button>
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</div>
							)}
						</div>
					</div>
				</>
			) : (
				<div className='absolute inset-0 -z-10 h-screen w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'>
					<div className='flex justify-center items-center h-full'>
						<input
							type='password'
							placeholder='Parol'
							className='input font-Poppins'
							onChange={e => {
								if (e.target.value === 'bobir') setIsLoggedIn(true)
							}}
						/>
					</div>
				</div>
			)}
		</>
	)
}

export default Admin
