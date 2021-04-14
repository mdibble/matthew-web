import { CHANGE_THEME } from '../actions/actionTypes';
import { Theme } from '../../theme';
import { Action } from '../actions';

const initialState = {
  theme: Theme.Light,
};

const themeReducer: any = (state = initialState, action: Action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
