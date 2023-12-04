import Idiomas from './Idiomas'
import Pagina from './Pagina'
import Provider from './contexto/Provider'
import './App.css'

function App() {
	return (
		<Provider>
			{/* Con Provider se quita Fragment es el contenedor que engloba a los dos componentes */}
			<div className='banderas'>
				{/* Componente de Idioma */}
				<Idiomas />
			</div>
			<div className='contenido'>
				{/* Componente Pagina */}
				<Pagina />
			</div>
		</Provider>
	)
}

export default App
