import './App.css'
import Pagina1 from './Pagina1'
import Pagina2 from './Pagina2'
import Pagina3 from './Pagina3'
import Colores from './Colores'
// Busca datos dentro del fichero contexto, y luego acceder a 'Contexto.js'
import { Datos } from './contexto/Contexto'

function App() {
	return (
		<>
			{/* 
		createContext y useContext
		Cuatro componentes tienen que acceder a un contexto,
		este contexto no puede estar dentro de ninguno de los cuatro componentes, por que si no, evidentemente, solo podría acceder ese mismo componente.
		No lo puedo añadir dentro de ninguno, tiene que haber un fichero externo, que guarde esta información.
		Lo correcto es que cree una carpeta dentro de mi carpeta src, centralizado. Carpeta contexto, creo un fichero llamado 'Contexto.js'. Este fichero lo utilizo para dos cosas: 
		– Primero para crear al contexto 
		– y para acceder a los valores de este contexto.
		*/}
			{/* Podría poner 'Provider' en '<Datos.Provider>...</Datos.Provider>' el Provider me facilita la opción de acceder a los datos, pero en vez de ponerlo aquí, que es un poquito farragoso. Lo ponemos dentro de 'Contexto' */}
			<Datos>
				{/* Deberían poder acceder al contexto estos cuatro hijos, estos cuatro componentes. Para que todos ellos puedan acceder, lo que tengo que hacer es crear un componente padre que los agrupe a todos. Componente 'Datos' */}
				<div className='App'>
					{/* Componentes de páginas */}
					<Pagina1 />
					<Pagina2 />
					<Pagina3 />
					{/*  */}
				</div>
				{/* Colores es la caja de colores */}
				<Colores />
				{/* 'Datos' está englobando a todos y cada no de los componentes que tienen acceso al contexto */}
			</Datos>
		</>
	)
}

export default App
