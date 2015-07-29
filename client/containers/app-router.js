import React from 'react';
import { Router, Route, Redirect } from 'react-router';
import { reduxRouteComponent } from 'redux-react-router';
import { history } from 'react-router/lib/HashHistory';
import { store } from '../index.js';
import AppContainer from './app-container';
import LoginFormContainer from './login-form-container';
import HomeComponent from '../components/home-component';

export default class AppRouter {
    render() {
        return(
            <Router history={history}>
                <Redirect from='/' to='/login' />
                <Route component={reduxRouteComponent(store)}>
                    <Route path='/' component={AppContainer}>
                        <Route path='login' component={LoginFormContainer} />
                        <Route path='home' component={HomeComponent} />
                    </Route>
                </Route>
            </Router>
        );
    }
}
