import * as constants from '../constants';

const initialState = {
    username: '',
    isLoading: false,
}

export default function(state = initialState, action) {

    const { data, type } = action;

    switch (type) {
        case constants.LOGIN_SUBMITTED:
            return {
                ...state,
                username: data.username,
                isLoading: true,
            };

        case constants.LOGIN_SUCCEEDED:
            return initialState;

        case constants.LOGIN_FAILED:
            return {
                ...state,
                isLoading: false,
            };

        default:
            return state;
    }

}
