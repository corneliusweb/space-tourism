import { createFileRoute, Link } from '@tanstack/react-router';
import { destinations } from '../../constants/data';

export const Route = createFileRoute('/destination/$name')({
	component: DestinationPage,
	errorComponent: CustomError,
	loader: ({ params }) => {
		const planet = destinations.find(
			(d) => d.name.toLowerCase() === params.name.toLowerCase()
		);
		if (!planet) {
			throw new Error(`We could not find destination "${params.name}"`);
		}
		return planet;
	},
});

function DestinationPage() {
	const planet = Route.useLoaderData();

	return (
		<>
			<h2 className='my-4 text-fs-800 uppercase font-serif'>
				{planet.name}
			</h2>
			<p className='text-fs-400 tracking-normal leading-6 text-blue-300 tablet:leading-9'>
				{planet.description}
			</p>
			<hr className='my-8 text-white/25' />
			<div className='tablet:flex tablet:justify-between tablet:px-11'>
				<p className='mb-6'>
					<span className='text-blue-300 block text-sm uppercase tracking-wide font-sans-cond mb-1'>
						Avg. Distance
					</span>
					<span className='text-md-500 uppercase font-serif'>
						{planet.distance}
					</span>
				</p>
				<p className='mb-6'>
					<span className='text-blue-300 block text-sm uppercase tracking-wide font-sans-cond mb-1'>
						Est. Travel time
					</span>
					<span className='text-md-500 uppercase font-serif'>
						{planet.travel}
					</span>
				</p>
			</div>
		</>
	);
}

function CustomError({ error }: { error: Error }) {
	return (
		<section className='text-center flex items-center justify-center py-12 fixed h-screen bg-dark-blue left-0 top-0 w-full z-5'>
			<div>
				<h2 className='text-fs-700 uppercase font-bold font-serif text-red-400 mb-4'>
					Hold on! <br /> We Have a Problem💔
				</h2>
				<p className='text-blue-300 mb-4 tracking-wide'>{error.message}</p>
				<Link
					to='/destination/$name'
					params={{ name: destinations[0].name }}
					className='text-white underline underline-offset-5 decoration-1'
				>
					Return to destinations
				</Link>
			</div>
		</section>
	);
}
