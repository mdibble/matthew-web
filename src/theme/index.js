import { Theme } from './types';

const lightTheme = {
	name: 'Light Theme',

	primary: '#EFEFEF',
	primaryInverse: '#282828',
	primaryText: '#282828',

	secondary: '#CFCFCF',
	secondaryInverse: '#353535',
	secondaryText: '#353535',

	svg: 'invert(11%) sepia(84%) saturate(20%) hue-rotate(315deg) brightness(100%) contrast(92%);',
	svgInverse: 'invert(100%) sepia(1%) saturate(3334%) hue-rotate(145deg) brightness(121%) contrast(87%);',
};

const darkTheme = {
	name: 'Dark Theme',

	primary: '#282828',
	primaryInverse: '#EFEFEF',
	primaryText: '#EFEFEF',

	secondary: '#353535',
	secondaryInverse: '#CFCFCF',
	secondaryText: '#CFCFCF',

	svg: 'invert(100%) sepia(1%) saturate(3334%) hue-rotate(145deg) brightness(121%) contrast(87%);',
	svgInverse: 'invert(11%) sepia(84%) saturate(20%) hue-rotate(315deg) brightness(100%) contrast(92%);',
}


export function getTheme(theme) {
	let newTheme;
	switch (theme) {
		case Theme.Light:
			newTheme = lightTheme; 
			break;
		case Theme.Dark:
			newTheme = darkTheme;	
			break;
		default:
	}
	return newTheme;
}