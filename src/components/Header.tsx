import { Link } from '@tanstack/react-router';
import { logo, menuIcon, closeIcon } from '../assets/shared';
import { useState } from 'react';

const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<header className='flex justify-between items-center p-8 tablet:p-0 tablet:pr-10 tablet:pt-12 tablet:pl-12'>
			<Link to='/'>
				<img src={logo} alt='space tourism logo' />
			</Link>

			<button
				onClick={() => setIsNavOpen((prev) => !prev)}
				className='tablet:hidden'
			>
				<img src={menuIcon} alt='hamburger icon' />
			</button>

			{/* Mobile nav */}
			{isNavOpen && (
				<nav>
					<div className='absolute right-0 top-0 w-3/5 bg-[#0B0D17]/80 h-screen p-8 backdrop-blur-[80px]'>
						<button
							className='float-right'
							onClick={() => setIsNavOpen(false)}
						>
							<img src={closeIcon} alt='close icon' />
						</button>
						<ul
							className='mt-18 text-xl grid gap-6'
							onClick={() => setIsNavOpen(false)}
						>
							<li>
								<span className='font-bold text-xl mr-3'>00</span>
								<Link to='/'>HOME</Link>
							</li>
							<li>
								<span className='font-bold text-xl mr-3'>01</span>
								<Link to='/destination'>DESTINATION</Link>
							</li>
							<li>
								<span className='font-bold text-xl mr-3'>02</span>
								<Link to='/crew'>CREW</Link>
							</li>
							<li>
								<span className='font-bold text-xl mr-3'>03</span>
								<Link to='/technology'>TECHNOLOGY</Link>
							</li>
						</ul>
					</div>
				</nav>
			)}

			{/* Large screen nav */}
			<span className='h-[0.5px] ml-15 -mr-10 z-1 grow bg-white/25 hidden lg:block'></span>

			<nav className='hidden tablet:block'>
				<ul className='flex gap-8 bg-white/5 backdrop-blur-[80px] pl-30 pr-8 sm:pl-10 lg:pl-20 xl:pl-38'>
					<li className='sm-link-lists'>
						<Link
							to='/'
							className='sm-links'
							activeProps={{
								className: 'border-b-2',
							}}
						>
							<span className='sm-link-num'>00</span>
							HOME
						</Link>
					</li>
					<li className='sm-link-lists'>
						<Link
							to='/destination'
							className='sm-links'
							activeProps={{
								className: 'border-b-2',
							}}
						>
							<span className='sm-link-num'>01</span>
							DESTINATION
						</Link>
					</li>
					<li className='sm-link-lists'>
						<Link
							to='/crew'
							className='sm-links'
							activeProps={{
								className: 'border-b-2',
							}}
						>
							<span className='sm-link-num'>02</span>
							CREW
						</Link>
					</li>
					<li className='sm-link-lists'>
						<Link
							to='/technology'
							className='sm-links'
							activeProps={{
								className: 'border-b-2',
							}}
						>
							<span className='sm-link-num'>03</span>
							TECHNOLOGY
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
export default Header;
