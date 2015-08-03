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
      .end((err, res={}) => {
        const { body } = res;

        err ?
          dispatch(userFetchFailed()) :
          dispatch(userFetchSucceeded(body));
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
      .post('http://localhost:3000/api/token')
      .send(JSON.stringify(data))
      .end((err, res) => {
        err ?
          dispatch(loginFailed()) :
          window.location.reload();
      });
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
      .end((err, res={}) => {
        const { body } = res;

        err ?
          dispatch(userFetchFailed()) :
          dispatch(userFetchSucceeded(body));
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

export function tokenDeleted(data) {
  return dispatch => {
    dispatch({
      type: constants.TOKEN_DELETED,
      data,
    });

    return request
      .del('http://localhost:3000/api/token')
      .end((err, res) => {
        err ?
          dispatch(tokenDeleteFailed()) :
          window.location.reload();
      });
  };
}

export function tokenDeleteFailed(data) {
  return {
    type: constants.TOKEN_DELETE_FAILED,
    data,
  };
}