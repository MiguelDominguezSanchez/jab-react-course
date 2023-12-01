import React, { useContext } from 'react'
import { Contexto } from './contexto/Contexto'

function Pagina2() {
	const { color } = useContext(Contexto)
	return (
		<div className='hijo' style={{ background: color }}>
			<h1>{color}</h1>
			Página 2
		</div>
	)
}

export default Pagina2
