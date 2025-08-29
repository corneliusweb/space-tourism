import { createFileRoute, notFound } from '@tanstack/react-router';
import { crews } from '../../constants/data';

export const Route = createFileRoute('/crew/$crew')({
	component: CrewMember,
	loader: ({ params }) => {
		const crew = crews.find((c) => c.name === params.crew);
		if (!crew) {
			throw notFound();
		}
		return crew;
	},
});

function CrewMember() {
	const crew = Route.useLoaderData();
	return (
		<div>
			<p className='uppercase text-white/50 font-serif text-lg'>{crew.role}</p>
      <h2>{crew.name}</h2>
      <p>{ crew.bio}</p>
		</div>
	);
}
