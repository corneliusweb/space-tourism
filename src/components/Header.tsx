import { Link } from '@tanstack/react-router';
import { logo, menuIcon, closeIcon } from '../assets/shared';
import { useState } from 'react';

const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<header className='flex justify-between items-center p-8'>
			<Link to='/'>
				<img src={logo} alt='space tourism logo' />
			</Link>

			<button onClick={() => setIsNavOpen((prev) => !prev)}>
				<img src={menuIcon} alt='hamburger icon' />
			</button>

			{/* Mobile nav */}
			{isNavOpen && (
				<nav className=''>
					<div className='absolute right-0 top-0 w-3/5 bg-[#0B0D17]/80 h-screen p-8 backdrop-blur-[80px]'>
						<button
							className='float-right'
							onClick={() => setIsNavOpen(false)}
						>
							<img src={closeIcon} alt='close icon' />
						</button>
						<ul className='mt-18 text-xl grid gap-6'>
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
		</header>
	);
};
export default Header;
