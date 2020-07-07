import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({});

const initialState = {};

const configureStore = () => createStore(rootReducer, initialState);

export default configureStore;
