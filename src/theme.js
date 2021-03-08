import { Theme } from './store/enum/theme';

const lightTheme = {
	name: 'Light Theme',
	primary: 'white',
	secondary: 'gray',
	text_primary: 'black',
	text_secondary: 'black',
};

const darkTheme = {
	name: 'Dark Theme',
	primary: 'black',
	secondary: 'gray',
	text_primary: 'white',
	text_secondary: 'white'
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