import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Modelo from './reyes/Modelo'
import Error404 from './reyes/Error404'
import Home from './reyes/Home'
import Nav from './Nav'

function App() {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/reyes/:rey' element={<Modelo />} />
				<Route path='/*' element={<Error404 />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
