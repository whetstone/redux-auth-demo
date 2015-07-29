import * as constants from '../constants';

export function applicationLoaded(data) {
    return {
        type: constants.APPLICATION_LOADED,
        data,
    };
}

export function loginSubmitted(data) {
    return {
        type: constants.LOGIN_SUBMITTED,
        data,
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
