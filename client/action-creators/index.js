import * as constants from '../constants';
import request from '../_config/superagent';

export function applicationLoaded(data) {
    return {
        type: constants.APPLICATION_LOADED,
        data,
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
    return {
        type: constants.LOGIN_SUCCEEDED,
        data,
    };
}

export function loginFailed(data) {
    return {
        type: constants.LOGIN_FAILED,
        data,
    };
}
