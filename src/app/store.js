import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {mathReducer} from './reducers/MathReducer';
import {userReducer} from './reducers/userReducer';

import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

const myLogger = (store) => (next) => (action) => {
    // console.log('Logged Action:', action);
    next(action);
};

const store = createStore( 
    combineReducers({math:mathReducer, user:userReducer}), 
    {}, 
    applyMiddleware(myLogger, logger(), thunk, promise())
);

store.subscribe( () => {
    // console.log('Store updated!', store.getState())
});

export default store;

