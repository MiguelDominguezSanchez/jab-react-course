import React, { useContext } from 'react'
import Contexto from './contexto/Contexto'

function Profesora() {
	const { alumno } = useContext(Contexto)
	const idioma = alumno[3].idioma
	// const imagen = `./images/users_images/${alumno[idioma].foto}`
	// const imagen = `../public/images/users_images/${alumno[idioma].foto}`
	const imagen = `./images/users_images/${alumno[idioma].foto}`
	return (
		<div className='profesora'>
			<h1>{alumno[idioma].boton1}:</h1>
			<div className='foto'>
				<img className='imagen' src={imagen} alt='imagen de profesora' />
			</div>
			<div className='nombre'>{alumno[idioma].nombre}</div>
		</div>
	)
}

export default Profesora
