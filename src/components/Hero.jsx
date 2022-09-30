import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
	return (
		<div className='hero-image'>
			<Navbar />
			<div className='hero-text'>
				<h1>
					Hello! I'm Tom!
					<br />
					I'm a Mechanical Engineer turned
					Developer and
				</h1>
			</div>
		</div>
	);
};

export default Hero;
