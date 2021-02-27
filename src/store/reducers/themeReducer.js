import { CHANGE_THEME } from '../actions/actionTypes';
import theme from '../enum/theme';

const initialState = {
	theme: theme.Light, 
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