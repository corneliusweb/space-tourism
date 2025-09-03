import { useEffect } from 'react';

interface ResponsiveBackground {
	mobile: string;
	tablet: string;
	desktop: string;
}

export const useBodyBackground = (backgrounds: ResponsiveBackground) => {
	useEffect(() => {
		document.documentElement.style.setProperty(
			'--bg-mobile',
			`url(${backgrounds.mobile})`
		);
		document.documentElement.style.setProperty(
			'--tablet',
			`url(${backgrounds.tablet})`
		);
		document.documentElement.style.setProperty(
			'--desktop',
			`url(${backgrounds.desktop})`
		);

		document.body.classList.add('page-background');

		return () => {
			document.body.classList.remove('page-background');
			document.documentElement.style.removeProperty('--bg-mobile');
			document.documentElement.style.removeProperty('--bg-tablet');
			document.documentElement.style.removeProperty('--bg-desktop');
		};
	}, [backgrounds.mobile, backgrounds.tablet, backgrounds.desktop]);
};
