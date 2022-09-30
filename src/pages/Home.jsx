import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import ScrollToTop from '../components/ScrollToTop';
const Home = () => {
	return (
		<>
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
			<ScrollToTop />
		</>
	);
};

export default Home;
