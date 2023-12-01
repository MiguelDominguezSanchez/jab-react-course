import React, { useState } from 'react'
import Contexto from './Contexto'

const valores = [
	{
		titulo: 'Aprenda React intensivamente con una profesora nativa',
		texto: '2 semanas. Una profesora sólo para ti (12h/día)',
		boton1: 'Profesora',
		nombre: 'Marta Ríos',
		boton2: 'Lugar',
		direccion: '48 St Laurent Boulevard, Montreal, Canadá',
	},
	{
		titulo: 'Aprenda React intensivamente con una profesora nativa',
		texto: '2 semanas. Una profesora sólo para ti (12h/día)',
		boton1: 'Profesora',
		foto: 'marta.PNG',
		nombre: 'Marta Ríos',
		boton2: 'Lugar',
		direccion: '48 St Laurent Boulevard, Montreal, Canadá',
	},
	{
		titulo: 'Learn React intensively with a native teacher',
		texto: '2 weeks. A teacher just for you (12h/day)',
		boton1: 'Professor',
		foto: 'grace.PNG',
		nombre: 'Grace Trembley',
		boton2: 'Lugar',
		direccion: '48 St Laurent Boulevard, Montreal, Canadá',
	},
	{
		titulo: 'Apprenez React intensément avec un professeur natif',
		texto: '2 semaines. Un professeur rien que pour vous (12h/jour)',
		boton1: 'Professeur',
		foto: 'aimee.PNG',
		nombre: 'Aimée Mathieu',
		boton2: 'Emplacement',
		direccion: '2700 Rue Jean-Perrin #190, Québec, Canadá',
	},
	{
		idioma: 0,
	},
]

const Provider = function ({ children }) {
	const [alumno, setAlumno] = useState(valores)
	return (
		<Contexto.Provider value={{ alumno, setAlumno }}>
			{children}
		</Contexto.Provider>
	)
}

export default Provider
