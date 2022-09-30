import React from 'react';
import { useGlobalContext } from './context';
import { FaTimes } from 'react-icons/fa';

const Sidebar = () => {
	const { isSidebarOpen, closeSidebar } =
		useGlobalContext();

	return (
		<aside
			className={`${
				isSidebarOpen
					? 'sidebar show-sidebar'
					: 'sidebar'
			}`}
		>
			<FaTimes
				onClick={closeSidebar}
				style={{
					color: 'red',
					fontSize: '2rem',
					cursor: 'pointer',
				}}
				className='cross'
			/>
			<ul className='sidebar-links'>
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
						href='https://drive.google.com/file/d/1ALGR75D9UAR31VotTYMaI6ISXH_IkLfD/view?usp=sharing'
						target='_blank'
					>
						Resume
					</a>
				</li>
			</ul>
		</aside>
	);
};

export default Sidebar;
