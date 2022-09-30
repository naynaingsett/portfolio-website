import React from 'react';
import {
	FaHtml5,
	FaCss3,
	FaReact,
	FaGitAlt,
	FaGithub,
	FaTerminal,
	FaBootstrap,
} from 'react-icons/fa';
import {
	BsGearFill,
	BsWordpress,
} from 'react-icons/bs';
import {
	SiJavascript,
	SiVisualstudiocode,
	SiFigma,
	SiTailwindcss,
} from 'react-icons/si';
import { MdDevices } from 'react-icons/md';
const Skills = () => {
	return (
		<>
			<section
				className='skills-container'
				id='skills'
			>
				<div>
					<h3>Skills & Tools</h3>
					<h1>My Toolbox & Things I Can Do</h1>
					<p>
						The skills, tools and technologies I
						use to bring your products to life:
					</p>
				</div>

				<div className='icons-container'>
					<div className='skills'>
						<FaHtml5 className='icon' />
						<p>
							<span>HTML5</span>
						</p>
					</div>
					<div className='skills'>
						<FaCss3 className='icon' />
						<p>
							<span>CSS3</span>
						</p>
					</div>
					<div className='skills'>
						<SiJavascript className='icon' />
						<p>
							<span>Javascript</span>
						</p>
					</div>
					<div className='skills'>
						<FaReact className='icon' />
						<p>
							<span>React</span>
						</p>
					</div>
					<div className='skills'>
						<FaGitAlt className='icon' />
						<p>
							<span>Git</span>
						</p>
					</div>
					<div className='skills'>
						<FaGithub className='icon' />
						<p>
							<span>Github</span>
						</p>
					</div>
					<div className='skills'>
						<BsGearFill className='icon' />
						<p>
							<span>RESTful APIs</span>
						</p>
					</div>
					<div className='skills'>
						<FaTerminal className='icon' />
						<p>
							<span>Command Line</span>
						</p>
					</div>
					<div className='skills'>
						<BsWordpress className='icon' />
						<p>
							<span>Wordpress</span>
						</p>
					</div>
					<div className='skills'>
						<SiVisualstudiocode className='icon' />
						<p>
							<span>VS Code</span>
						</p>
					</div>
					<div className='skills'>
						<FaBootstrap className='icon' />
						<p>
							<span>Bootstrap</span>
						</p>
					</div>
					<div className='skills'>
						<SiTailwindcss className='icon' />
						<p>
							<span>Tailwind CSS</span>
						</p>
					</div>
					<div className='skills'>
						<SiFigma className='icon' />
						<p>
							<span>Figma</span>
						</p>
					</div>
					<div className='skills'>
						<MdDevices className='icon' />
						<p>
							<span>Responsive Websites</span>
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default Skills;
