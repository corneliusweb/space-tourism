import {
	createFileRoute,
	Link,
	Navigate,
	Outlet,
	useLocation,
} from '@tanstack/react-router';
import { destinations } from '../../constants/data';
import PageHeading from '../../components/PageHeading';
import { bgMobile, bgDesktop, bgTablet } from '../../assets/destination';
import { useBodyBackground } from '../../constants/useBodyBackground';

export const Route = createFileRoute('/destination')({
	component: DestinationLayout,
});

function DestinationLayout() {
	// background image handling
	useBodyBackground({
		mobile: bgMobile,
		tablet: bgTablet,
		desktop: bgDesktop,
	});

	const location = useLocation();
	const planetName = location.pathname.split('/').at(2);

	// Only redirect if we're at exactly /destination
	const isExactDestinationRoute = location.pathname === '/destination';

	// If no planet is selected in /destination, redirect to the first destination
	if (!planetName && isExactDestinationRoute) {
		return (
			<Navigate
				to='/destination/$name'
				params={{ name: destinations[0].name }}
			/>
		);
	}

	const planet = planetName
		? destinations.find(
				(p) => p.name.toLowerCase() === planetName.toLowerCase()
		  )
		: undefined;
	if (!planet) return <p>Destination not found</p>;

	return (
		<div className='tablet:w-planet-content-md tablet:mx-auto lg:w-planet-content-lg'>
			<PageHeading number='01' heading='Pick your destination' />
			<div className='lg:max-w-planet-content-lg lg:flex lg:items-center lg:my-35 lg:gap-25'>
				{planetName && (
					<img
						src={planet.image}
						alt={planet.name}
						className='w-37.5 mx-auto my-18 tablet:w-planet-img-md lg:my-0 xl:w-planet-img-lg'
					/>
				)}

				<section className='tablet:w-planet-textbox-md tablet:mx-auto'>
					<nav className='flex justify-center gap-8 min-h-fit lg:justify-start'>
						{destinations.map((planet) => (
							<Link
								key={planet.name}
								to='/destination/$name'
								params={{ name: planet.name }}
								className={`pb-4 hover:border-b-2 font-sans-cond uppercase tracking-wider text-blue-300 text-sm tablet:text-base ${
									planetName === 'moon' &&
									'first-of-type:text-white first-of-type:border-b-2'
								}`}
								activeProps={{
									className: 'text-white border-b-2',
								}}
							>
								{planet.name}
							</Link>
						))}
					</nav>
					<div className='text-center px-8 tablet:px-0 lg:text-left'>
						<Outlet />
					</div>
				</section>
			</div>
		</div>
	);
}
