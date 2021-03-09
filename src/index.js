import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store, { saveState } from './store';

import App from './components/App';

store.subscribe(() => {
	saveState(store.getState());
})

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);