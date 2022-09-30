import React from 'react';
import { useGlobalContext } from './context';
import { FaTimes } from 'react-icons/fa';
import {
	BsGithub,
	BsLinkedin,
	BsTwitter,
} from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
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
					<a href='#about' onClick={closeSidebar}>
						About
					</a>
				</li>
				<li>
					<a
						href='#skills'
						onClick={closeSidebar}
					>
						Skills & Tools
					</a>
				</li>

				<li>
					<a
						href='#projects'
						onClick={closeSidebar}
					>
						Projects
					</a>
				</li>
				<li>
					<a
						href='#contact'
						onClick={closeSidebar}
					>
						Contact
					</a>
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
			<ul className='side-icons'>
				<li>
					<a
						href='https://github.com/naynaingsett'
						target='_blank'
					>
						<BsGithub />
					</a>
				</li>
				<li>
					<a
						href='https://www.linkedin.com/in/nay-naing-sett-162359244'
						target='_blank'
					>
						<BsLinkedin />
					</a>
				</li>
				<li>
					<a
						href='https://twitter.com/NSett20'
						target='_blank'
					>
						<BsTwitter />
					</a>
				</li>
				<li>
					<a
						target='_blank'
						href='https://mail.google.com/mail/?view=cm&fs=1&to=naysett20@gmail.com'
					>
						<SiGmail />
					</a>
				</li>
			</ul>
		</aside>
	);
};

export default Sidebar;
