import { useEffect } from 'react';

interface ResponsiveBackground {
	mobile: string;
	tablet: string;
	desktop: string;
}

export const useBodyBackground = (backgrounds: ResponsiveBackground) => {
	useEffect(() => {
		// update background at breakpoints
		const updateBackground = () => {
			const width = window.innerWidth;
			let backgroundImg;

			if (width >= 1024) {
				backgroundImg = backgrounds.desktop;
			} else if (width >= 640) {
				backgroundImg = backgrounds.tablet;
			} else {
				backgroundImg = backgrounds.mobile;
			}

			document.body.style.backgroundImage = `url(${backgroundImg})`;
			document.body.style.backgroundSize = 'cover';
			document.body.style.backgroundPosition = 'center';
			document.body.style.backgroundRepeat = 'no-repeat';
			document.body.style.minHeight = '100vh';
		};

		// update background when component mounts
		updateBackground();

		// listen for window resize
		window.addEventListener('resize', updateBackground);

		// cleanup on unmount
		return () => {
			window.removeEventListener('resize', updateBackground);
			document.body.classList.remove('page-background');
			document.body.style.backgroundImage = ``;
			document.body.style.backgroundSize = '';
			document.body.style.backgroundPosition = '';
			document.body.style.backgroundRepeat = '';
			document.body.style.minHeight = '';
		};
	}, [backgrounds.mobile, backgrounds.tablet, backgrounds.desktop]);
};
