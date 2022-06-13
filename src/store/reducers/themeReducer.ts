import { CHANGE_THEME } from '../actions/actionTypes';
import { ThemeState, getSystemTheme } from '../../theme';
import { Action } from '../actions';

const initialState = {
  theme: getSystemTheme(),
};

function themeReducer(state = initialState, action: Action): ThemeState {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
}

export default themeReducer;
