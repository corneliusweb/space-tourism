import { createRootRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
	component: () => (
		<>
			<div className=''>
				<Link to='/' className='[&.active]:font-bold '>
					Home
				</Link>{' '}
				<Link to='/about'>
					About
				</Link>
			</div>
			<hr />
			<Outlet />
		</>
	),
});
