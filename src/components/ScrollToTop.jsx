import { useState, useEffect } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
export default function ScrollToTop() {
	function topFunction() {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome,         Firefox, IE and Opera
	}
	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScroll(window.pageYOffset > 100);
		});
	}, []);
	return (
		<BsFillArrowUpCircleFill
			onClick={topFunction}
			className={
				scroll ? 'to-top active' : 'to-top'
			}
			style={{ scrollBehavior: 'smooth' }}
		/>
	);
}
