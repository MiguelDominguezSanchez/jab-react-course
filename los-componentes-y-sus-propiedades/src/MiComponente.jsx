import React from 'react'

function MiComponente({ rey }) {
	return (
		<div>
			<h1>
				Hola {rey.nombre} come {rey.reses} vacas al día.
			</h1>
		</div>
	)
}

MiComponente.defaultProps = {
	reses: 'pocas',
	rey: 'Rey Godo',
}

export default MiComponente
