import {
	createFileRoute,
	Link,
	Navigate,
	Outlet,
	useLocation,
} from '@tanstack/react-router';
import { technologies } from '../../constants/data';
import { bgDesktop } from '../../assets/technology';
import { bgTablet } from '../../assets/technology';
import { bgMobile } from '../../assets/technology';
import { useBodyBackground } from '../../constants/useBodyBackground';

export const Route = createFileRoute('/technology')({
	component: TechnologyLayout,
});

function TechnologyLayout() {
	// background image handling
	useBodyBackground({
		mobile: bgMobile,
		tablet: bgTablet,
		desktop: bgDesktop,
	});

	const location = useLocation();
	const techName = location.pathname.split('/').at(2);

	const isExactTechRoute = location.pathname === '/technology';

	// navigate to the first tech
	if (!techName && isExactTechRoute) {
		return (
			<Navigate
				to='/technology/$technology'
				params={{ technology: technologies[0].id }}
			/>
		);
	}

	const tech = techName
		? technologies.find((t) => t.id === techName)
		: undefined;
	if (!tech) return <p>Technology not found</p>;

	return (
		<>
			<section>
				<div>
					<img src={tech.images.portrait} alt={tech.name} />
				</div>
			</section>
			<section>
				<nav>
					<ul className='flex '>
						{technologies.map((tech, index) => (
							<li key={tech.id}>
								<Link
									to='/technology/$technology'
									params={{ technology: tech.id }}
								>
									{index + 1}
									<span className='sr-only'>{tech.name}</span>
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<Outlet />
			</section>
		</>
	);
}
