import types from './types';

const initialState = {

};

export default function(state = initialState, action) {
    switch (action.type) {
        // case types.LOGIN_REQUEST:
        //     return {
        //         ...state,
        //     };

        default:
            return state;
    }
}
