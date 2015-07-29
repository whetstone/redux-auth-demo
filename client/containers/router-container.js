import React from 'react';
import { Router, Route } from 'react-router';
import { reduxRouteComponent } from 'redux-react-router';
import { history } from 'react-router/lib/HashHistory';
import { store } from '../index.js';

class Test {
    render() {
        return (
            <div>hi</div>
        );
    }
}

export default class App {
    render() {
        return(
            <Router history={history}>
                <Route component={reduxRouteComponent(store)}>
                    <Route path='/' component={Test}/>
                </Route>
            </Router>
        );
    }
}
