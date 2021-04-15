import { connectRouter, RouterState } from 'connected-react-router';
import { combineReducers, Reducer } from 'redux';
import { History } from 'history';

import themeReducer from './themeReducer';

import { ThemeState } from '../../theme';

export type State = {
  router: Reducer<RouterState>,
  theme: ThemeState
}

function createRootReducer(history: History): Reducer {
  return combineReducers({
    router: connectRouter(history),
    theme: themeReducer,
  });
}

export default createRootReducer;
