import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../store/reducer';

const initialState = {};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store;

if(window.navigator.userAgent.includes("Chrome")){
    store = createStore(rootReducers, initialState, composeEnhancers(applyMiddleware(...middleware)));
}else{
    store = createStore(rootReducers, initialState, compose(applyMiddleware(...middleware)));
}

export default store;