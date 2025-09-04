import {
	createFileRoute,
	Link,
	Navigate,
	Outlet,
	useLocation,
	useNavigate,
} from '@tanstack/react-router';
import PageHeading from '../../components/PageHeading';
import { crews } from '../../constants/data';
import { bgMobile, bgDesktop, bgTablet } from '../../assets/crew/index';
import { useBodyBackground } from '../../constants/useBodyBackground';
import { useRef } from 'react';

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
	const navigate = useNavigate();
	const crewName = location.pathname.split('/').at(2);
	const isExactCrewRoute = location.pathname === '/crew';

	// Swipe handling refs
	const touchStartX = useRef<number>(0);
	const touchEndX = useRef<number>(0);

	// navigate to the page at the index 0 if we're at /crew
	if (!crewName && isExactCrewRoute) {
		return <Navigate to='/crew/$crew' params={{ crew: crews[0].id }} />;
	}

	// find the crew member with the id from the url
	const crew = crewName
		? crews.find((crew) => crew.id === crewName)
		: undefined;

	if (!crew) return <p>Crew member not found!</p>;

	// Find current crew index for navigation
	const currentIndex = crews.findIndex((c) => c.id === crew.id);

	// Swipe handlers
	const handleTouchStart = (e: React.TouchEvent) => {
		touchStartX.current = e.targetTouches[0].clientX;
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		touchEndX.current = e.targetTouches[0].clientX;
	};

	const handleTouchEnd = () => {
		if (!touchStartX.current || !touchEndX.current) return;

		const distance = touchStartX.current - touchEndX.current;
		const isLeftSwipe = distance > 50;
		const isRightSwipe = distance < -50;

		if (isLeftSwipe && currentIndex < crews.length - 1) {
			// Swipe left - go to next crew member
			const nextCrew = crews[currentIndex + 1];
			navigate({ to: '/crew/$crew', params: { crew: nextCrew.id } });
		}

		if (isRightSwipe && currentIndex > 0) {
			// Swipe right - go to previous crew member
			const prevCrew = crews[currentIndex - 1];
			navigate({ to: '/crew/$crew', params: { crew: prevCrew.id } });
		}
	};

	return (
		<div
			className='tablet:w-crew-content-md lg:w-4xl xl:w-crew-content-lg tablet:mx-auto'
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
		>
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
										className={`font-bold text-6xl text-white/17 inline-block hover:text-white/80 tablet:text-7xl`}
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
					className='w-crew-img mx-auto tablet:w-crew-img-md xl:w-crew-img-lg'
				/>
			</div>
		</div>
	);
}
