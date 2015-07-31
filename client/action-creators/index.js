import * as constants from '../constants';
import request from '../_config/superagent';
import { transitionTo } from 'redux-react-router';

export function applicationLoaded(data) {
    return dispatch => {
        dispatch({
            type: constants.APPLICATION_LOADED,
            data,
        });

        return request
            .get('http://localhost:3000/api/user')
            .end((err, res) => {
                console.log(err, res);
            });
    };
}

export function loginSubmitted(data) {
    return dispatch => {
        dispatch({
            type: constants.LOGIN_SUBMITTED,
            data,
        });

        return request
            .post('http://localhost:3000/api/session')
            .send(JSON.stringify(data))
            .end((err, res) => {
                err ?
                    dispatch(loginFailed()) :
                    dispatch(loginSucceeded());
            });
    };
}

export function loginSucceeded(data) {
    return dispatch => {
        dispatch(transitionTo('/home'));

        dispatch({
            type: constants.LOGIN_SUCCEEDED,
            data,
        });
    }
}

export function loginFailed(data) {
    return {
        type: constants.LOGIN_FAILED,
        data,
    };
}
