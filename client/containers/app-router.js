import React from 'react';
import { Router, Route, Redirect } from 'react-router';
import { reduxRouteComponent } from 'redux-react-router';
import { history } from 'react-router/lib/HashHistory';
import { store } from '../index.js';
import AppContainer from './app-container';
import HomeContainer from '../containers/home-container';

export default class AppRouter {
    render() {
        return(
            <Router history={history}>
                <Redirect from='/' to='/home' />
                <Route component={reduxRouteComponent(store)}>
                    <Route path='/' component={AppContainer}>
                        <Route path='home' component={HomeContainer} />
                    </Route>
                </Route>
            </Router>
        );
    }
}
