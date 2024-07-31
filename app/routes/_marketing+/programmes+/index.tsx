import { Link } from '@remix-run/react'

export default function ProgrammesRoute() {
	const programmes = [
		{ id: 'fullBody', name: 'Full Body' },
		{ id: 'upperBody', name: 'Upper Body' },
		{ id: 'lowerBody', name: 'Lower Body' },
	]

	return (
		<>
			<div>Programmes</div>
			<div>
				{programmes.map((programme) => (
					<Link
						key={programme.id}
						relative="path"
						to={`${programme.id}/dayOne`}
					>
						{programme.name}
					</Link>
				))}
			</div>
		</>
	)
}
