import * as constants from '../constants';

export default function(state = {}, action) {

    const { data, type } = action;

    switch (type) {
        case constants.LOGIN_SUCCEEDED:
            return state;

        default:
            return state;
    }

}
