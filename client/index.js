import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import Manifest from './components/manifest';

import { routerStateReducer } from 'redux-react-router';
import thunkMiddleware from 'redux-thunk';
import AppRouter from './containers/app-router';
import * as reducers from './reducers';

import './_assets/style.scss';

function loggerMiddleware(next) {
  return next => action => {
    next(action);
  };
}

const reducer = combineReducers({
  router: routerStateReducer,
  ...reducers,
});
const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware, loggerMiddleware),
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  createStore
);
export const store = finalCreateStore(reducer, {});

render(
  <div>
    <Provider store={store}>
      {() => <AppRouter />}
    </Provider>
    <DevTools store={store} monitor={Manifest}/>
  </div>,
  document.getElementById('app-wrapper')
);
