import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='nav-center'>
				<Link to='/' className='title'>
					Nay Naing Sett
				</Link>
				<ul className='nav-links'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<a href='#skills'>Skills & Tools</a>
					</li>
					<li>
						<a href='#about'>About</a>
					</li>
					<li>
						<a href='#projects'>Projects</a>
					</li>
					<li>
						<a href='#contact'>Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
