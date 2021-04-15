import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import createRootReducer, { State } from './reducers';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export function saveState(state: State): void {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}

const persistedState = loadState();

export const history = createBrowserHistory();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  createRootReducer(history),
  persistedState,
  compose(
    applyMiddleware(
      routerMiddleware(history),
    ),
    composeEnchancers(),
  ),
);
