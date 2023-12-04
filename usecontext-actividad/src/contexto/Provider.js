// Importación hook useState
import React, { useState } from 'react'
// 'Contexto' archivo independiente importado
import Contexto from './Contexto'
// Array con diferentes objetos, cada uno de los tres primeros objetos será leído, no va a modificarse. Pero habrá uno que tendrá que modificarse que será el idioma, habrá un idioma inicial por defecto.
// Un objeto será el idioma que ha elegido el usuario.
const valores = [
	{
		titulo: 'Aprenda React intensivamente con una profesora nativa',
		texto: '2 semanas. Una profesora sólo para ti (12h/día)',
		boton1: 'Profesora',
		// foto: 'marta.PNG',
		foto: 'user_1.jpg',
		nombre: 'Rodolfo Ríos',
		boton2: 'Lugar',
		direccion: 'Av. Principe de Vergara, 33 4º D, Ríos Rosas 23990',
	},
	{
		titulo: 'Learn React intensively with a native teacher',
		texto: '2 weeks. A teacher just for you (12h/day)',
		boton1: 'Professor',
		// foto: 'grace.PNG',
		foto: 'user_2.jpg',
		nombre: 'Tomas Trembley',
		boton2: 'Lugar',
		direccion: '48 St Laurent Boulevard, Montreal, Canadá',
	},
	{
		titulo: 'Apprenez React intensément avec un professeur natif',
		texto: '2 semaines. Un professeur rien que pour vous (12h/jour)',
		boton1: 'Professeur',
		// foto: 'aimee.PNG',
		foto: 'user_3.jpg',
		nombre: 'Jean Mathieu',
		boton2: 'Emplacement',
		direccion: '2700 Rue Jean-Perrin #190, Québec, Canadá',
	},
	{
		// 0 Español, 1 Inglés, 2 Francés.
		idioma: 0,
	},
]

// Provider me permite acceder a todos los datos, que afecta a todos los children
// Provider que permite acceder a todos los datos y afecta a todos los children.
const Provider = function ({ children }) {
	// useState me permite modificar los valores.
	// Array de objetos 'valores'
	// Variable 'alumno' que actualiza su estado, y 'setAlumno' me permite modificar 'alumno'. Esto es un useState hook importado, que va a ser un array de objetos llamado 'valores'
	const [alumno, setAlumno] = useState(valores)

	return (
		// Devuelve Contexto Provider
		// Valor que voy a modificar los datos cuando haga click
		// Valor que toma y modifica 'alumno' y 'setAlumno'
		// Por una parte un alumno y por otra parte setAlumno, 'alumno' para poder acceder a los datos y 'setAlumno' para poder modificar los datos cuando haga click en el idioma.
		<Contexto.Provider value={{ alumno, setAlumno }}>
			{/* Contenido serán todos los hijos 'children' */}
			{children}
			{/* Etiqueta de cierre Contexto Provider */}
		</Contexto.Provider>
	)
}

// Exportación
export default Provider
