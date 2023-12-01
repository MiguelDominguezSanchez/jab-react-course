import React from 'react'
import Profesora from './Profesora'
import Ubicacion from './Ubicacion'

function Pagina() {
	return (
		<>
			<h1>Título</h1>
			<h2>Subtítulo</h2>
			<div className='botones'>
				<button>Boton1</button>
				<button>Boton2</button>
			</div>
			<Profesora />
			<Ubicacion />
		</>
	)
}

export default Pagina
