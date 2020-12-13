import types from './types';

export default {
    loginRequest(login, subLogin, password, resolve, reject) {
        return {
            type: types.LOGIN_REQUEST,
            login, subLogin, password, resolve, reject
        };
    },

    loginSuccess(login, subLogin) {
        return {
            type: types.LOGIN_SUCCESS,
            login, subLogin
        };
    },

    logoutRequest() {
        return {
            type: types.LOGOUT_REQUEST
        };
    },
}