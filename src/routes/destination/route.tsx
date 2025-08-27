import {
	createFileRoute,
	Link,
	Outlet,
	useLocation,
} from '@tanstack/react-router';
import { destinations } from '../../constants/data';

export const Route = createFileRoute('/destination')({
	component: DestinationLayout,
});

function DestinationLayout() {
	const location = useLocation();
	const planetName = location.pathname.split('/').at(2);
	// const planetName = pathSplit[2];

	const planet = planetName
		? destinations.find(
				(p) => p.name.toLowerCase() === planetName.toLowerCase()
		  )
		: undefined;

	return (
		<div className='text-center px-8'>
			<p className='font-sans-cond uppercase flex justify-center gap-2'>
				<span className='font-bold tracking-wider'>01</span>
				<span className='text-base tracking-widest'>
					Pick your destination
				</span>
			</p>

			{planetName && (
				<img
					src={planet?.image}
					alt={planet?.name}
					className='w-37.5 mx-auto my-12'
				/>
			)}

			<main>
				<nav className='flex justify-center gap-6 min-h-fit'>
					{destinations.map((planet) => (
						<Link
							key={planet.name}
							to='/destination/$name'
							params={{ name: planet.name }}
							className='pb-4 hover:border-b-2 font-sans-cond uppercase tracking-wide'
						>
							{planet.name}
						</Link>
					))}
				</nav>
				<Outlet />
			</main>
		</div>
	);
}
