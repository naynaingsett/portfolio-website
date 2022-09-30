import React from 'react';
import question from '../question.jpg';
const About = () => {
	return (
		<section
			className='about-container'
			id='about'
		>
			<div className='custom-shape-divider-bottom-1664444476'>
				<svg
					data-name='Layer 1'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1200 120'
					preserveAspectRatio='none'
				>
					<path
						d='M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z'
						className='shape-fill'
					></path>
				</svg>
			</div>
			<div className='about-title'>
				<div className='about-title-t'>
					<h5>ABOUT</h5>
					<h1
						style={{
							fontFamily:
								'Crimson Pro , sans-serif',
						}}
					>
						Who is Tom?
					</h1>
				</div>
				<div>
					<img
						src={question}
						className='profile'
					/>
				</div>
			</div>
			<div className='about-detail'>
				<h6
					style={{
						fontFamily:
							'Crimson Pro , sans-serif',
						lineHeight: '35px',
						marginBottom: '30px',
						fontSize: '1.9rem',
					}}
				>
					A passion-driven Front-End Developer
					<br /> with design chops.
				</h6>
				<p style={{ marginBottom: '30px' }}>
					My motto as a developer is to give back
					the best and most appropriate result to
					the client who trusted in my abilities.
					User experience, beautiful pixels and
					writing clean accessible, human code
					matters to me. I sweat the details.
				</p>
				<p style={{ marginBottom: '30px' }}>
					I was attending my Third Year of
					Mechanical Engineering at{' '}
					<a href='https://en.wikipedia.org/wiki/Yangon_Technological_University'>
						<span>
							Yangon Technological University
						</span>
					</a>{' '}
					before all the universities were closed
					down for Covid-19 pandemic in March
					2020. Coup happened in Myanmar in
					February 2021. Currently, I am in hiatus
					due to personal reasons.
				</p>
				<p style={{ marginBottom: '30px' }}>
					By the time I started learning web
					development, I was certain that this is
					the career path I would never get tired
					of. I'm happiest when I'm creating,
					learning, exploring and thinking about
					how to make things better. Time flies so
					fast while I am absorbed building a
					project. I love trying new techs and
					features that are evolving day by day.
					If you want to make a small talk or a
					deep discussion,{' '}
					<a href='#contact'>contact me</a> . I am
					welcome to everyone.
				</p>
			</div>
		</section>
	);
};

export default About;
