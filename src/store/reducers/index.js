import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import themeReducer from './themeReducer';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    theme: themeReducer,
})

export default createRootReducer;