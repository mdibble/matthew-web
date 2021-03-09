import { createStore } from 'redux';
import rootReducer from './reducers';

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

export default createStore(rootReducer, persistedState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);