import * as constants from '../constants';

const initialState = {
  authenticated: false,
  username: null
};

export default function (state = initialState, action = {}) {

  const { data, type } = action;

  switch (type) {
    case constants.LOGIN_SUCCEEDED:
      return {
        ...state,
        authenticated: true,
        username: 'test',
      };

    case constants.USER_FETCH_SUCCEEDED:
      return {
        ...state,
        authenticated: true,
        username: 'test',
      };

    case constants.TOKEN_DELETE_SUCCEEDED:
      return {
        ...state,
        authenticated: false,
      };

    default:
      return state;
  }

}