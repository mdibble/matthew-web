import { CHANGE_THEME } from '../actions/actionTypes';
import { Theme } from '../enum/theme';

const initialState = {
	theme: Theme.Light, 
}

const themeReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_THEME:
			return {
				...state,
				theme: action.payload,
			}	
		default:
			return state;
	}
};

export default themeReducer;