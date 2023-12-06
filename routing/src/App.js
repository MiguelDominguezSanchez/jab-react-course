import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Atanagildo from './reyes/Atanagildo'
import Ataulfo from './reyes/Ataulfo'
import Ervigio from './reyes/Ervigio'
import Leovigildo from './reyes/Leovigildo'
import Recesvinto from './reyes/Recesvinto'
import Sisebuto from './reyes/Sisebuto'
import Nav from './Nav'

function App() {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path='/atanagildo' element={<Atanagildo />} />
				<Route path='/ataulfo' element={<Ataulfo />} />
				<Route path='/ervigio' element={<Ervigio />} />
				<Route path='/leovigildo' element={<Leovigildo />} />
				<Route path='/leogivildo' element={<Navigate to='/leovigildo' />} />
				<Route path='/recesvinto' element={<Recesvinto />} />
				<Route path='/sisebuto' element={<Sisebuto />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
