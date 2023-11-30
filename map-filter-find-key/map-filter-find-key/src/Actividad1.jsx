import React from 'react'

function Actividad1({ reyes }) {
	const url = 'https://www.html6.es/img/rey_'
	const resultado = reyes.map((e) => (
		<div className='rey' key={e.nombre}>
			{' '}
			<span className='rojo'>{e.nombre.toUpperCase()} </span>
			ha comido {e.reinado * e.vacasComidas * 365} vacas en sus {e.reinado} años
			de reinado.
			<img src={url + e.nombre.toLowerCase() + '.png'} alt='' />
		</div>
	))
	return <>{resultado}</>
}

export default Actividad1
