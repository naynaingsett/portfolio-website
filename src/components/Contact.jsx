import React from 'react';
import Coffee from '../coffee.png';
const Contact = () => {
	return (
		<section
			className='contact-container'
			id='contact'
		>
			<div>
				<h1>Let's have a chat</h1>
				<p>naysett20@gmail.com</p>
				<button className='btn'>
					<a
						target='_blank'
						href='https://mail.google.com/mail/?view=cm&fs=1&to=naysett20@gmail.com'
					>
						<span>Get in touch</span>
					</a>
				</button>
			</div>
			<div>
				<img
					src={Coffee}
					alt='coffee'
					className='coffee'
				/>
			</div>
		</section>
	);
};

export default Contact;
