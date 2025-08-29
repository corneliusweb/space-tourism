import { createFileRoute, notFound } from '@tanstack/react-router';
import { crews } from '../../constants/data';

export const Route = createFileRoute('/crew/$crew')({
	component: CrewMember,
	loader: ({ params}) => {
		const crew = crews.find((c) => c.id === params.crew );
		if (!crew) {
			throw notFound();
		}
		return crew;
	},
});

function CrewMember() {
	const crew = Route.useLoaderData();
	return (
		<>
			<p className='uppercase text-white/50 font-serif text-lg my-7'>
				{crew.role}
			</p>
			<h2 className='uppercase tracking-wide font-serif text-sm-700'>
				{crew.name}
			</h2>
			<p className='text-base font-sans my-4'>{crew.bio}</p>
		</>
	);
}
