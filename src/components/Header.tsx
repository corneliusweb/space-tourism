import { Link } from '@tanstack/react-router';
import { logo, menuIcon, closeIcon } from '../assets/shared';

const Header = () => {


	return (
		<header className='flex justify-between items-center'>
			<img src={logo} alt='space tourism logo' />
			<img src={menuIcon} alt="hamburger icon" />
			<img src={closeIcon} alt="close icon" />
			<nav>
				<ul className=''>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/destination'>Destination</Link>
					</li>
					<li>
						<Link to='/crew'>Crew</Link>
					</li>
					<li>
						<Link to='/technology'>Technology</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
export default Header;
