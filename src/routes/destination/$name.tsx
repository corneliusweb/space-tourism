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
		<section className=''>
			<h2 className='my-4 text-fs-800 uppercase font-serif'>
				{' '}
				{planet.name}{' '}
			</h2>
			<p className='text-fs-00 tracking-tight text-blue-300'>{planet.description}</p>
			<hr className='my-6 text-white/25' />
			<p className='mb-6'>
				<span className='text-blue-300 block text-sm uppercase tracking-wide font-sans-cond'>Avg. Distance</span>
				<span className='text-3xl uppercase'>{planet.distance}</span>
			</p>
			<p className='mb-6'>
				<span className='text-blue-300 block text-sm uppercase tracking-wide font-sans-cond'>Est. Travel time</span>
				<span className='text-3xl uppercase'>{planet.travel}</span>
			</p>
		</section>
	);
}
