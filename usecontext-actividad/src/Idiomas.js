import React, { useContext } from 'react'
import Contexto from './contexto/Contexto'
import Provider from './contexto/Provider'

function Idiomas() {
	const { setAlumno } = useContext(Contexto)
	const { alumno } = useContext(Contexto)
	const cambio1 = () => {
		setAlumno(
			alumno.map((dato, indice) =>
				indice == 3 ? { ...dato, idioma: 0 } : { ...dato }
			)
		)
	}
	const cambio2 = () => {
		setAlumno(
			alumno.map((dato, indice) =>
				indice == 3 ? { ...dato, idioma: 1 } : { ...dato }
			)
		)
	}
	const cambio3 = () => {
		setAlumno(
			alumno.map((dato, indice) =>
				indice == 3 ? { ...dato, idioma: 2 } : { ...dato }
			)
		)
	}
	return (
		//
		<div className='idiomas'>
			{/* Dentro tiene cada uno de los idiomas */}
			<div className='bandera' onClick={cambio1}>
				<img src='./images/banderas/Flag_Es__231201.png' />
			</div>
			<div className='bandera' onClick={cambio2}>
				<img src='./images/banderas/Flag_Uk__231201.png' />
			</div>
			<div className='bandera' onClick={cambio3}>
				<img src='./images/banderas/Flag_Fr__231201.png' />
			</div>
		</div>
	)
}

export default Idiomas
