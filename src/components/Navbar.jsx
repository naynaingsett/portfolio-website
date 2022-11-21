import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';
import Sidebar from './SideBar';
const Navbar = () => {
	const { openSidebar } = useGlobalContext();
	return (
		<nav className='navbar'>
			<Sidebar />
			<div className='nav-center'>
				<FaBars
					onClick={openSidebar}
					className='bars'
				/>
				<Link to='/' className='title'>
					Nay Naing Sett
				</Link>
				<ul className='nav-links'>
					<li>
						<a href='#about'>About</a>
					</li>
					<li>
						<a href='#skills'>Skills & Tools</a>
					</li>

					<li>
						<a href='#projects'>Projects</a>
					</li>
					<li>
						<a href='#contact'>Contact</a>
					</li>
					<li>
						<a
							href='https://drive.google.com/file/d/1cv_vP2eUgYdYrkQkcFBd1u0VXn8V9IRZ/view?usp=share_link'
							target='_blank'
						>
							Resume
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
