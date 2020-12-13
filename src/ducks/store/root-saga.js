import { call, all } from 'redux-saga/effects';
import loginSagas from '../login/sagas';

export default function*() {
    yield all([call(loginSagas)]);
}
