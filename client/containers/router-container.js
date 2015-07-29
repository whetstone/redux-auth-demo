import React from 'react';
import { Router, Route, Redirect } from 'react-router';
import { reduxRouteComponent } from 'redux-react-router';
import { history } from 'react-router/lib/HashHistory';
import { store } from '../index.js';
import App from './app-container';
import LoginForm from './login-form-container';

export default class AppRouter {
    render() {
        return(
            <Router history={history}>
                <Redirect from='/' to='/login' />
                <Route component={reduxRouteComponent(store)}>
                    <Route path='/' component={App}>
                        <Route path='login' component={LoginForm} />
                    </Route>
                </Route>
            </Router>
        );
    }
}
