import * as constants from '../constants';

const initialState = {
    username: '',
}

export default function(state = initialState, action) {

    const { data, type } = action;

    switch (type) {
        case constants.LOGIN_SUBMITTED:
            return {
                ...state,
                username: data.username,
            };

        case constants.LOGIN_SUCCEEDED:
            return state;

        case constants.LOGIN_FAILED:
            return state;

        default:
            return state;
    }

}
