import { createFileRoute, Link, Outlet } from '@tanstack/react-router';
import PageHeading from '../../components/PageHeading';
import { crews } from '../../constants/data';

export const Route = createFileRoute('/crew')({
	component: Crew,
});

function Crew() {
	return (
		<main>
			<PageHeading number='02' heading='Meet your crew' />
			<section>
				<Outlet />
				<nav>
					<ul>
						{crews.map((crew) => (
							<li>
								<Link to='/crew/$crew' params={{ crew: crew.name }}>
									.
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</section>
		</main>
	);
}
