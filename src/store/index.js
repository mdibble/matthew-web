import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import createRootReducer from './reducers';
import { createBrowserHistory } from 'history';

const loadState = () => {
	try {
		const serializedState = localStorage.getItem('state');
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	}
	catch (err) {
		return undefined;
	}
}

export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('state', serializedState);
	}
	catch (err) {
		console.log(err);
	}
};

const persistedState = loadState();

export const history = createBrowserHistory();

export default createStore(
	createRootReducer(history), 
	persistedState,
	compose(
		applyMiddleware(
			routerMiddleware(history),
		),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
	
);