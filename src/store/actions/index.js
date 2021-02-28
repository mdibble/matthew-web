import { CHANGE_THEME } from './actionTypes';

export const changeTheme = theme => ({
	type: CHANGE_THEME,
	payload: {
		theme
	}
});