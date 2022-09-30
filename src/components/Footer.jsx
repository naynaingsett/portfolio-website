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
			<div className='footer-name'>
				<h3>Nay Naing Sett</h3>
				<p>
					© 2022, Built and designed by Tom (aka
					Nay Naing Sett)
				</p>
			</div>
			<div className='footer-link'>
				<p>
					<span>Links</span>
				</p>
				<ul className='clinks-container'>
					<li>
						<a href='#home'>Home</a>
					</li>
					<li>
						<a href='#skills'>Skills</a>
					</li>
					<li>
						<a href='#about'>About</a>
					</li>
					<li>
						<a href='#projects'>Projects</a>
					</li>
				</ul>
			</div>
			<div className='footer-link'>
				<p>
					<span>Get in touch</span>
				</p>
				<ul className='cicons'>
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
			</div>
		</section>
	);
};

export default Footer;
