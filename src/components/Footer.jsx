import React from 'react';
import {
	BsGithub,
	BsLinkedin,
	BsTwitter,
} from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
const Footer = () => {
	return (
		<section className='footer-container'>
			<div>
				<h3>Nay Naing Sett</h3>
				<p>
					© 2022, Built and designed by Nay Naing
					Sett
				</p>
			</div>
			<div>
				<p>
					<span>Links</span>
				</p>
				<ul className='clinks-container'>
					<li>About</li>
					<li>Projects</li>
					<li>Skills</li>
					<li>Contact</li>
				</ul>
			</div>
			<div>
				<p>
					<span>Get in touch</span>
				</p>
				<ul className='cicons'>
					<li>
						<BsGithub />
					</li>
					<li>
						<BsLinkedin />
					</li>
					<li>
						<BsTwitter />
					</li>
					<li>
						<SiGmail />
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Footer;
