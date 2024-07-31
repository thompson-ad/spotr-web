import { useParams } from '@remix-run/react'

export default function FullBodyDayOneRoute() {
	const { programmeId, workoutId } = useParams()
	return (
		<div>
			{programmeId} {workoutId}
		</div>
	)
}
