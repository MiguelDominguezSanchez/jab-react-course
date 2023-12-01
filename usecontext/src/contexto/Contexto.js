// Hooks utilizados createContext y useState.
import React, { createContext, useState } from 'react'

// Este Contexto se va a encargar de crear el contexto.
// createContext() es propio de React, y crea un contexto.
// Ya tenemos creado el contexto
// Esta línea crea el contexto con 'createContext()' importado asignado a la constante 'Contexto'
export const Contexto = createContext()

// Crear acceso a datos 'Datos'
// Datos será el encargado de acceder al 'Contexto' y recuperar los datos que se irán guardando desde los diferentes hijos, los diferentes hijos también podrán acceder a 'Contexto' y podrán modificarlo. Todos podrá acceder a 'Contexto'. Tenemos que decirle quién puede acceder en App.js

// Hay que decir a quien tiene que dar servicio a los componentes Pagina1,2,3 y también a Colores. Y sii alguna vez se ampliara, a más elementos.
// En vez de poner el nombre de cada uno de los hijos, se establece con React con la desestructuración con 'children'. En App.js busca los hijos que haya en '<Datos>...</Datos>.' Afectará a todos los hijos.
// Tenemos el elemento que nos va a permitir acceder al color para poner de fondo a cada uno de los elementos.
// Esta otra función lo que hace es decirle que todos los hijos 'children' que estén dentro de 'Datos'. En App.js '<Datos>...</Datos>'. Que puedan acceder a estas opciones, que por una parte una variable llamada 'color', y a la función del hook useState que nos permite cambiar el 'color' con la variable 'setColor'. Todos los hijos. Y ese valor inicial del 'color' será 'gold', luego se cambiará.
export const Datos = ({ children }) => {
	// Una variable que se llama 'color' y le digo que para modificar el valor de color voy a utilizar una función que se llama 'setColor'. Y si quiero le puedo dar un valor inicial a 'color', por ejemplo 'gold'.
	// Necesito que este 'color' lo pueda utilizar cada una de las páginas.
	// setColor tiene que estar conectado desde contexto importándolo en Colores.js
	const [color, setColor] = useState('gold')
	// Tiene que devolver
	return (
		// 'Datos' es sustituido de manera interna por 'Contexto'. '<Contexto.Provider>...</Contexto.Provider>'
		// En principio 'Provider' sirve para acceder, pero también sirve para modificar.
		// Como yo quiero pasar datos a este elemento 'Provider', le voy a poner un 'value'.
		// Lo ponemos con llaves {{}} por que es javascript
		// Le vamos a pasar dos cosas, hay que utilizar useState, la variable y la función que hay que utilizar esta variable. Es decir cuando yo ponga un color en el cuadro. Es decir cuando yo ponga un color en mi cuadro, es decir cuando yo esté en mi app, y haga click en azul, rojo, verde, o en el amarillo. Ese azul, rojo, verde, o amarillo, lo tendrá que guardar en algún sitio.
		// Lo va a guardar en la variable 'color', pero también deberé  modificar esta variable 'color', cuando haga click en el botón  de azul tiene que venir a 'color' y cambiar el color que tenía con el color nuevo.
		// Para modificar una variable no podemos modificarla de manera directa, tenemos que utilizar la función con el useState para modificarla.
		// La variable 'color' es para poder acceder al color y luego necesito también proporcionar la función que me va a permitir cambiar el color 'setColor'. En useState.
		// Provider lo que hace es proveer de datos a todos los hijos.
		// Aquí lo que hacemos es modificar
		<Contexto.Provider value={{ color, setColor }}>
			{/* 
			Esto afectaría a los hijos poniendo 'children' react ya sabe. Serían los hijos que estarían dentro del 'Contexto.Provider', que en realidad son los componentes que están dentro de 'Datos' en App.js. <Datos>...</Datos> 
			*/}
			{children}
			{/* 
					Lo correcto es que cree una carpeta dentro de mi carpeta src, centralizado. Carpeta contexto, creo un fichero llamado 'Contexto.js'. Este fichero lo utilizo para dos cosas: 
					– Primero para crear al contexto 
					– y para acceder a los valores de este contexto.
					*/}
		</Contexto.Provider>
	)
}
