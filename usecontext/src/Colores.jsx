import React, { useContext } from 'react'
// Para conectar setColor desde 'Contexto.js's
// 'Contexto' importado.
import { Contexto } from './contexto/Contexto'

function Colores() {
	// Acceso y uso de la constante 'setColor' de 'Contexto.js' con 'useContext'
	// Dentro de la función Colores() no existe ninguna función que tenga este nombre 'setColor'. Pero le decimos que vaya al 'Contexto' utilizando 'useContext' y acceda a 'setColor'. Accede aquí y le dice 'setColor' no está en la función 'Colores()'. Con lo cual se va a 'Contexto' y accede a los 'Datos' con 'setColor'.
	const { setColor } = useContext(
		// Tenemos solo un contexto, es decir solo hay declarado una variable de 'Contexto' en 'Contexto.js'
		// Aunque solo hay un contexto hay que indicarle que contexto es.
		Contexto
	)
	return (
		<div className='colores'>
			<div
				// Cuando hacemos click llama a la variable setColor de la función de 'useState' y le envía el valor del código hexadecimal de color.
				className='color'
				onClick={() => {
					// Ir a setColor y modificar el valor de la variable 'color'
					// setColor está en el contexto
					setColor('#4285f4')
				}}
			></div>
			<div
				className='color'
				onClick={() => {
					setColor('#ea4335')
				}}
			></div>
			<div
				className='color'
				onClick={() => {
					setColor('#fbbc05')
				}}
			></div>
			<div
				className='color'
				onClick={() => {
					setColor('#34a853')
				}}
			></div>
		</div>
	)
}

export default Colores
