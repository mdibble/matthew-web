import { CHANGE_THEME } from '../actions/actionTypes';
import { Theme, ThemeState } from '../../theme';
import { Action } from '../actions';

const initialState = {
  theme: Theme.Light,
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
