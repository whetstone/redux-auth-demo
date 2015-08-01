import * as constants from '../constants';

const initialState = {
    authenticated: false,
    username: null
};

export default function(state = initialState, action) {

    const { data, type } = action;

    switch (type) {
        case constants.LOGIN_SUCCEEDED:
          console.log(123);
            return {
                ...state,
                authenticated: true,
                username: 'test',
            };

        default:
            return state;
    }

}
