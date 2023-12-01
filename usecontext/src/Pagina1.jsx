// useContext importación
import React, { useContext } from 'react'
// Se importa la función 'Contexto' desde 'Contexto.js'
import { Contexto } from './contexto/Contexto'

function Pagina1() {
	// El useContext es para acceder y el createContext es para crearlo.
	// useContext hook
	// Acceso al valor 'color' que está dentro del contexto y nos ha enviado una información.
	// Estamos leyendo un valor del contexto que se llama 'Contexto'. Podría ser denominado con otro nombre, por ejemplo. 'PericoDeLosPalotes'.
	const { color } = useContext(
		// Accederá a 'Contexto' y el valor de contexto lo meterá en 'color', inicialmente el valor es 'gold' por que está en el useState. const [color, setColor] = useState('gold')
		// Accede a 'Contexto' a través de la opción del hook 'useContext' de React. Y lo que encuentre lo mete dentro de la variable 'color'. Y utiliza la variable 'color' para cambiar el background de la caja, la cambia del color que recibe. Inicialmente le hemos puesto que sea de color oro. Pero le podemos poner cualquier otro.
		Contexto
	)
	return (
		// Para recibir aquí color, primero accedo al contexto, el 'useContext' es para acceder y el createContext es para crearlo. En 'Contexto.js', export const Contexto = createContext(), ya está creado.
		// Queremos que esta caja la coloque de otro 'color', con un estilo css en línea con la variable 'color', para ello se accede mediante 'useContext'
		<div className='hijo' style={{ background: color }}>
			<h1>{color}</h1>
			Página 1
		</div>
	)
}

export default Pagina1
