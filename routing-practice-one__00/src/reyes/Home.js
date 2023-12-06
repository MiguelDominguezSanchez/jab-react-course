import { Link } from 'react-router-dom'

export default function Home() {
	const lista = [
		'atanagildo',
		'ervigio',
		'sisebuto',
		'ataulfo',
		'leovigildo',
		'recesvinto',
	]

	return (
		<div className='reyes'>
			{lista.map((unRey) => (
				<Link to={`${unRey}`}>
					<img src={`https://www.html6.es/img/rey_${unRey}.png`} alt='' />
				</Link>
			))}
		</div>
	)
}
