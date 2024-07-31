import { Link } from '@remix-run/react'

export default function ProgrammesRoute() {
	return (
		<>
			<div>Programmes</div>
			<div>
				<Link relative="path" to="fullBody/dayOne">
					Day 1
				</Link>
			</div>
		</>
	)
}
