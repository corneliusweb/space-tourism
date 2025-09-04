import {
	createFileRoute,
	Link,
	Navigate,
	Outlet,
	useLocation,
} from '@tanstack/react-router';
import { technologies } from '../../constants/data';
import { bgDesktop, bgMobile, bgTablet } from '../../assets/technology';
import { useBodyBackground } from '../../constants/useBodyBackground';
import PageHeading from '../../components/PageHeading';

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

	const handleTechImage = () => {
		let techImage;
		const width = window.innerWidth;

		if (width >= 640 && width < 1024) {
			techImage = tech.images.landscape;
		} else {
			techImage = tech.images.portrait;
		}

		return techImage;
	};

	return (
		<>
			<div className='tablet:w-crew-content-md tablet:mx-auto lg:w-tech-content-lg lg:float-right'>
				<PageHeading number='03' heading='Space Launch 101' />
			</div>
			<div className='my-16 lg:flex lg:flex-row-reverse lg:items-center lg:w-tech-content-lg lg:float-right lg:gap-10'>
				<img
					src={handleTechImage()}
					alt={tech.name}
					className='tablet:h-tech-img-md lg:h-tech-img-lg lg:w-tech-img-lg'
				/>

				<section className='text-center px-4 tablet:px-0 lg:flex lg:text-left lg:gap-15 lg:w-tech-textbox-lg'>
					<nav>
						<ul className='flex space-x-7 justify-center py-8 pb-10 lg:flex-col lg:items-center lg:space-x-0 lg:py-0 lg:pb-0 lg:justify-between lg:h-full'>
							{technologies.map((tech, index) => (
								<li key={tech.id}>
									<button>
										<Link
											to='/technology/$technology'
											params={{ technology: tech.id }}
											className='rounded-full flex items-center justify-center w-10 h-10 transition-all duration-300 ease-linear text-lg border-2 border-white/25 hover:border-white tablet:w-14 tablet:h-14 tablet:text-2xl lg:w-20 lg:h-20 lg:text-md-600'
											activeProps={{
												className: 'bg-white text-dark-blue',
											}}
										>
											{index + 1}
											<span className='sr-only'>{tech.name}</span>
										</Link>
									</button>
								</li>
							))}
						</ul>
					</nav>
					<div className='tablet:max-w-lg tablet:mx-auto'>
						<Outlet />
					</div>
				</section>
			</div>
		</>
	);
}
