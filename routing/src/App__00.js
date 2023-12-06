import A from './paginas/A'
import B from './paginas/B'
import C from './paginas/C'
import D from './paginas/D'
import Nav from './Nav'
import Error404 from './paginas/Error404'
import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

function App() {
	return (
		// Fragmento no hace falta por que los elementos se envuelven con BrowseRouter.
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path='/' element={<A />} />
				<Route path='/pagina2' element={<B />} />
				<Route path='/pagina3' element={<C />} />
				<Route path='/pagina4/:letra' element={<D />} />
				<Route path='/pagina1' element={<Navigate to='/' />} />
				<Route path='*' element={<Error404 />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
