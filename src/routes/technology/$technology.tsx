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
		<>
			<p className='text-lg uppercase opacity-50 font-serif tablet:text-2xl lg:text-md-600'>
				The terminology...
			</p>
			<h2 className='font-serif uppercase text-2xl py-6 tablet:text-sm-700 lg:text-md-700'>
				{tech.name}
			</h2>
			<p className='text-blue-300 text-fs-400 leading-7 tablet:tracking-wide tablet:text-base lg:text-lg lg:tracking-normal lg:leading-9'>
				{tech.description}
			</p>
		</>
	);
}
