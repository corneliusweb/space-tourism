import {
	createFileRoute,
	Link,
	Navigate,
	Outlet,
	useLocation,
} from '@tanstack/react-router';
import PageHeading from '../../components/PageHeading';
import { crews } from '../../constants/data';
import { bgMobile, bgDesktop, bgTablet } from '../../assets/crew/index';
import { useBodyBackground } from '../../constants/useBodyBackground';

export const Route = createFileRoute('/crew')({
	component: Crew,
});

function Crew() {
	// background image handling
	useBodyBackground({
		mobile: bgMobile,
		tablet: bgTablet,
		desktop: bgDesktop,
	});

	const location = useLocation();
	const crewName = location.pathname.split('/').at(2);
	const isExactCrewRoute = location.pathname === '/crew';

	// navigate to the page at the index 0 if we're at /crew
	if (!crewName && isExactCrewRoute) {
		return <Navigate to='/crew/$crew' params={{ crew: crews[0].id }} />;
	}

	// find the crew member with the id from the url
	const crew = crewName
		? crews.find((crew) => crew.id === crewName)
		: undefined;

	if (!crew) return <p>Crew member not found!</p>;

	return (
		<div className='tablet:w-crew-content-md lg:w-crew-content-lg tablet:mx-auto'>
			<PageHeading number='02' heading='Meet your crew' />

			<div className='mt-18 lg:flex lg:items-center lg:justify-between lg:min-h-crew-textbox-lg lg:relative lg:gap-5 lg:mt-0'>
				<section className='text-center px-4 tablet:px-0 tablet:w-lg tablet:mx-auto lg:text-left lg:mx-0 lg:w-crew-textbox-lg'>
					<Outlet />
					<nav className='mb-11 mt-4 lg:absolute lg:left-0 lg:bottom-0'>
						<ul className='flex gap-5 justify-center items-center lg:justify-start'>
							{crews.map((crew) => (
								<li key={crew.id}>
									<Link
										to='/crew/$crew'
										params={{ crew: crew.id }}
										className={`font-bold text-6xl text-white/17 inline-block hover:text-white/80 lg:text-8xl`}
										activeProps={{
											className: 'text-white/100',
										}}
									>
										. <span className='sr-only'>{crew.name}</span>
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</section>

				<img
					src={crew.image}
					alt={crew.name}
					className='w-crew-img mx-auto tablet:w-crew-img-md lg:w-crew-img-lg'
				/>
			</div>
		</div>
	);
}
