import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerStateReducer } from 'redux-react-router';
import thunkMiddleware from 'redux-thunk';
import AppRouter from './containers/router-container';
import * as reducers from './reducers';

function loggerMiddleware(next) {
    return next => action => {
        console.log(action);
        next(action);
    };
}

const reducer = combineReducers({
    router: routerStateReducer,
    ...reducers,
});
const finalCreateStore = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore);
export const store = finalCreateStore(reducer, {});

render(
    <AppRouter store={store} />,
    document.getElementById('app-wrapper')
);
