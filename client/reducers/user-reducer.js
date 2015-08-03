import * as constants from '../constants';

const initialState = {
  authenticated: false,
  username: null
};

export default function (state = initialState, action = {}) {

  const { data, type } = action;

  switch (type) {
    case constants.USER_FETCH_SUCCEEDED:
      return {
        ...state,
        authenticated: true,
        username: data.username,
      };

    case constants.TOKEN_DELETE_FAILED:
      return {
        ...state,
        authenticated: false,
      };

    default:
      return state;
  }

}