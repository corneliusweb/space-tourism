import { createFileRoute } from '@tanstack/react-router';
import { technologies } from '../../constants/data';

export const Route = createFileRoute('/technology/$technology')({
	component: TechnologyPage,
	loader: ({ params }) => {
		const tech = technologies.find((t) => t.id === params.technology);
		if (!tech) {
			throw new Error(`We could not find technology ${params.technology}`);
		}
		return tech;
	},
});

function TechnologyPage() {
	const tech = Route.useLoaderData();
	return (
		<div>
			<p>The terminology...</p>
			<h2>{tech.name}</h2>
			<p>{tech.description}</p>
		</div>
	);
}
