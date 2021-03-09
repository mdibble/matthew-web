import { Theme } from './types';

const lightTheme = {
	name: 'Light Theme',
	primary: '#EFEFEF',
	secondary: '#CFCFCF',
	text_primary: '#282828',
	text_secondary: '#353535',
};

const darkTheme = {
	name: 'Dark Theme',
	primary: '#282828',
	secondary: '#353535',
	text_primary: '#EFEFEF',
	text_secondary: '#CFCFCF',
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