import { Link } from "@tanstack/react-router"

const Header = () => {
  return (
		<header>
			<img src='' alt='' />
			<nav>
				<ul>
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
}
export default Header