import { createFileRoute, Link, Outlet } from '@tanstack/react-router';
import { technologies } from '../../constants/data';

export const Route = createFileRoute('/technology')({
	component: TechnologyLayout,
});

function TechnologyLayout() {
	return (
		<main>
			<section>
				<nav>
					<ul>
						{technologies.map((tech, index) => (
							<li key={tech.id}>
								<Link
									to='/technology/$technology'
									params={{ technology: tech.id }}
								>
									{index + 1}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<Outlet />
			</section>
		</main>
	);
}
