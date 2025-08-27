import { createFileRoute, Link, Outlet } from '@tanstack/react-router';
import { destinations } from '../../constants/data';

export const Route = createFileRoute('/destination')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<p>
				<span>01</span> <span>Pick your destination</span>
			</p>

			<img src='' alt='selected planet' />

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
