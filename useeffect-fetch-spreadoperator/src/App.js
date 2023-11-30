import './App.css'
import { useEffect, useState } from 'react'

function App() {
	const [chiste, setChiste] = useState([])
	const otro = () => {
		const url = 'https://api.chucknorris.io/jokes'
		const peticion = fetch(url)
		peticion
			.then((datos) => datos.json())
			.then((lectura) =>
				lectura.value.map((chistes) =>
					setChiste((e) => [
						...e,
						<div className='ch' key={chistes.id}>
							{chiste.id} {chiste.joke}
						</div>,
					])
				)
			)
			.catch(console.log)
	}
	useEffect(() => {
		otro()
	}, [])
	return <>{chiste}</>
}

export default App
