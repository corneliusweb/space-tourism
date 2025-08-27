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
	const pathSplit = location.pathname.split('/');
	const planetName = pathSplit[2];

	const planet = planetName
  ? destinations.find(
    (p) => p.name.toLowerCase() === planetName.toLowerCase()
  )
  : undefined;

	return (
		<div>
			<p>
				<span>01</span> <span>Pick your destination</span>
			</p>

			<img src={planet?.image} alt='selected planet' />

			<main>
				<nav>
					{destinations.map((planet) => (
						<Link
							key={planet.name}
							to='/destination/$name'
							params={{ name: planet.name }}
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
