import {
	createFileRoute,
	Link,
	Navigate,
	Outlet,
	useLocation,
} from '@tanstack/react-router';
import PageHeading from '../../components/PageHeading';
import { crews } from '../../constants/data';

export const Route = createFileRoute('/crew')({
	component: Crew,
});

function Crew() {
	const location = useLocation();
	const crewName = location.pathname.split('/').at(2);

	const isExactCrewRoute = location.pathname === '/crew';

	// navigate to the page at the index 0 if we're at /crew
	if (!crewName && isExactCrewRoute) {
		return (
			<Navigate to='/crew/$crew' params={{ crew: crews[0].id }} />
		);
	}

	// find the crew member with the id from the url
	const crew = crewName
		? crews.find((crew) => crew.id === crewName)
		: undefined;

	if (!crew) return <p>Crew member not found!</p>;

	return (
		<>
			<div className='flex'>
				<PageHeading number='02' heading='Meet your crew' />
			</div>
			<section className='w-lg mx-auto text-center'>
				<Outlet />
				<nav>
					<ul className='flex gap-5 justify-center'>
						{crews.map((crew) => (
							<li key={crew.id}>
								<Link
									to='/crew/$crew'
									params={{ crew: crew.id }}
									className={`font-bold text-6xl text-white/17 inline-block`}
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
			<section>
				<div>
					<img src={crew.image} alt={crew.name} />
				</div>
			</section>
		</>
	);
}
