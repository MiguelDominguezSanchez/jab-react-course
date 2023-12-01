import Idiomas from './Idiomas'
import Pagina from './Pagina'
import './App.css'

function App() {
	return (
		<>
			<div className='banderas'>
				<Idiomas />
			</div>
			<div className='contenido'>
				<Pagina />
			</div>
		</>
	)
}

export default App
