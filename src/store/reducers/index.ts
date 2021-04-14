import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import themeReducer from './themeReducer';

import { Theme } from '../../theme';

export type State = {
  router: any,
  theme: {
    theme: Theme
  },
}

const createRootReducer: any = (history: any) => combineReducers({
  router: connectRouter(history),
  theme: themeReducer,
});

export default createRootReducer;
