import React from 'react';
import quizpc from '../quiz-pc.png';
import menu from '../menu.png';
import settdb from '../settdb.png';
import webpage1 from '../webpage1.png';
import webpage2 from '../webpage2.png';
import techNews from '../techNews.png';
import spacex from '../spacex.png';
const Projects = () => {
	return (
		<div
			className='project-container'
			id='projects'
		>
			<div className='custom-shape-divider-top-1664553617'>
				<svg
					data-name='Layer 1'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1200 120'
					preserveAspectRatio='none'
				>
					<path
						d='M1200 0L0 0 598.97 114.72 1200 0z'
						className='shape-fill'
					></path>
				</svg>
			</div>
			<p>Work</p>
			<h6>A Selection Of Stuff I've Built</h6>
			<div>
				<div className='p'>
					<div className='p-img'>
						<img
							src={quizpc}
							alt='quiz-pc'
							className='quizpc'
						/>
					</div>

					<div className='p-detail'>
						<h6>Your New Best Friend</h6>
						<br />
						<p>
							Have you wondered if you are a
							cat-person or a dog-person? Now it's
							the time to find out who your little
							companion will be. Try it out now!
						</p>
						<br />
						<button className='btn'>
							<a
								href='https://quizprojectbysett.netlify.app/'
								target='_blank'
							>
								View Project
							</a>
						</button>
						<button className='btn btn2'>
							<a
								href='https://github.com/naynaingsett/quiz-app'
								target='_blank'
							>
								View Code
							</a>
						</button>
					</div>
				</div>
				<div className='p p2'>
					<div className='p-detail'>
						<h6>Movie-Info Website</h6>
						<br />
						<p>
							I built a movie info website where
							you can search for movies and find
							the details. This project is powered
							by MovieDB API.
						</p>
						<br />
						<button className='btn'>
							<a
								href='https://movieinfowebsitebysett.netlify.app/'
								target='_blank'
							>
								View Project
							</a>
						</button>
						<button className='btn btn2'>
							<a
								href='https://github.com/naynaingsett/movie-info-website'
								target='_blank'
							>
								View Code
							</a>
						</button>
					</div>
					<div className='p-img'>
						<img
							src={settdb}
							alt='quiz-pc'
							className='quizpc'
						/>
					</div>
				</div>
				<div className='p'>
					<div className='p-img'>
						<img
							src={menu}
							alt='menu'
							className='quizpc'
						/>
					</div>
					<div className='p-detail'>
						<h6>Restaurant Menu</h6>
						<br />
						<p>
							I used Tailwind CSS to create the
							whole project. I highly focused on
							UI & UX. I also promoted Myanmar
							Food proudly to be well-known
							worldwide.
						</p>
						<br />
						<button className='btn'>
							<a
								href='https://restaurantmenubysett.netlify.app/'
								target='_blank'
							>
								View Project
							</a>
						</button>
						<button className='btn btn2'>
							<a
								href='https://github.com/naynaingsett/restaurant-menu'
								target='_blank'
							>
								View Code
							</a>
						</button>
					</div>
				</div>
				<div className='p p2'>
					<div className='p-detail'>
						<h6>Single Webpage 1</h6>
						<br />
						<p>
							I built a movie info website where
							you can search for movies and find
							the details. This project is powered
							by MovieDB API.
						</p>
						<br />
						<button className='btn'>
							<a
								href='https://webpage1bysett.netlify.app/'
								target='_blank'
							>
								View Project
							</a>
						</button>
						<button className='btn btn2'>
							<a
								href='https://github.com/naynaingsett/webpage1'
								target='_blank'
							>
								View Code
							</a>
						</button>
					</div>
					<div className='p-img'>
						<img
							src={webpage1}
							alt='quiz-pc'
							className='quizpc'
						/>
					</div>
				</div>
				<div className='p'>
					<div className='p-img'>
						<img
							src={webpage2}
							alt='menu'
							className='quizpc'
						/>
					</div>
					<div className='p-detail'>
						<h6>Single Webpage 2</h6>
						<br />
						<p>
							I used Tailwind CSS to create the
							whole project. I highly focused on
							UI & UX. I also promoted Myanmar
							Food proudly to be well-known
							worldwide.
						</p>
						<br />
						<button className='btn'>
							<a
								href='https://webpage2bysett.netlify.app/'
								target='_blank'
							>
								View Project
							</a>
						</button>
						<button className='btn btn2'>
							<a
								href='https://github.com/naynaingsett/webpage2'
								target='_blank'
							>
								View Code
							</a>
						</button>
					</div>
				</div>
				<div className='p p2'>
					<div className='p-detail'>
						<h6>TechNews Info</h6>
						<br />
						<p>
							This TechNews Website was built on
							NextJS12. So it doesn't include
							updated features that are added on
							NextJS13.
						</p>
						<br />
						<button className='btn'>
							<a
								href='https://technewsappbysett.netlify.app/'
								target='_blank'
							>
								View Project
							</a>
						</button>
						<button className='btn btn2'>
							<a
								href='https://github.com/naynaingsett/tech-news'
								target='_blank'
							>
								View Code
							</a>
						</button>
					</div>
					<div className='p-img'>
						<img
							src={techNews}
							alt='quiz-pc'
							className='quizpc'
						/>
					</div>
				</div>
				<div className='p'>
					<div className='p-img'>
						<img
							src={spacex}
							alt='menu'
							className='quizpc'
						/>
					</div>
					<div className='p-detail'>
						<h6>SpaceX Info</h6>
						<br />
						<p>
							I used simple concept in this
							project but the key point is calling
							multiple APIs for all contents at
							once and running smoothly.
						</p>
						<br />
						<button className='btn'>
							<a
								href='https://spacexinfobysett.netlify.app/'
								target='_blank'
							>
								View Project
							</a>
						</button>
						<button className='btn btn2'>
							<a
								href='https://github.com/naynaingsett/spacex'
								target='_blank'
							>
								View Code
							</a>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
