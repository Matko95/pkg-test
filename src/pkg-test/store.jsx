import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

// import the root reducer
import rootReducer from './reducers/index';

// create an object for the default data

const defaultState = {};

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const store = createStoreWithMiddleware(rootReducer, defaultState, reduxDevToolsEnchancer);

export default store;

