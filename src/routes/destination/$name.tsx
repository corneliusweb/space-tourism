import { createFileRoute, useParams } from '@tanstack/react-router';
import { destinations } from '../../constants/data';

export const Route = createFileRoute('/destination/$name')({
	component: DestinationPage,
});

function DestinationPage() {
	const { name } = useParams({ from: '/destination/$name' });
	const planet = destinations.find(
		(planet) => planet.name.toLowerCase() === name.toLowerCase()
	);

	if (!planet) return <p>Planet not found</p>;

	return (
    <section>
			<h2> {planet.name} </h2>
			<p>{planet.description}</p>
			<p>
				<span>Avg. Distance</span>
				<span>{planet.distance}</span>
			</p>
			<p>
				<span>Est. Travel time</span>
				<span>{planet.travel}</span>
			</p>
		</section>
	);
}
