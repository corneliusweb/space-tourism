import { createFileRoute, Link, Outlet } from '@tanstack/react-router';
import PageHeading from '../../components/PageHeading';
import { crews } from '../../constants/data';

export const Route = createFileRoute('/crew')({
	component: Crew,
});

function Crew() {
	return (
		<main className='mt-20'>
			<div className='flex'>
				<PageHeading number='02' heading='Meet your crew' />
			</div>
			<section className='w-lg mx-auto text-center'>
				<Outlet />
				<nav>
					<ul className='flex gap-5 justify-center'>
						{crews.map((crew) => (
							<li>
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
		</main>
	);
}
