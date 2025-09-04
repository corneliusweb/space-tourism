import { createFileRoute, notFound } from '@tanstack/react-router';
import { crews } from '../../constants/data';

export const Route = createFileRoute('/crew/$crew')({
	component: CrewMember,
	loader: ({ params }) => {
		const crew = crews.find((c) => c.id === params.crew);
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
			<p className='uppercase text-white/50 font-serif text-lg mb-2 tablet:text-fs-700 lg:text-md-600'>
				{crew.role}
			</p>
			<h2 className='uppercase tracking-wide font-serif text-fs-700 tablet:text-sm-700 lg:text-fs-800 lg:tracking-normal'>
				{crew.name}
			</h2>
			<p className='text-fs-400 leading-7 font-sans mt-4 tablet:text-base lg:text-lg lg:leading-9 text-blue-300'>
				{crew.bio}
			</p>
		</>
	);
}
