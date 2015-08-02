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
        err ? dispatch(userFetchFailed()) : dispatch(userFetchSucceeded());
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

export function userFetched(data) {
  return dispatch => {
    dispatch({
      type: constants.USER_FETCHED,
      data,
    });

    return request
      .get('http://localhost:3000/api/user')
      .end((err, res) => {
        err ? dispatch(userFetchFailed()) : dispatch(userFetchSucceeded());
      });
  };
}

export function userFetchSucceeded(data) {
  return {
    type: constants.USER_FETCH_SUCCEEDED,
    data,
  };
}

export function userFetchFailed(data) {
  return {
    type: constants.USER_FETCH_FAILED,
    data,
  };
}

export function sessionDeleted(data) {
  return dispatch => {
    dispatch({
      type: constants.SESSION_DELETED,
      data,
    });

    return request
      .del('http://localhost:3000/api/session')
      .end((err, res) => {
        err ? dispatch(sessionDeleteFailed()) : dispatch(sessionDeleteSucceeded());
      });
  };
}

export function sessionDeleteSucceeded(data) {
  return {
    type: constants.SESSION_DELETE_SUCCEEDED,
    data,
  };
}

export function sessionDeleteFailed(data) {
  return {
    type: constants.SESSION_DELETE_FAILED,
    data,
  };
}