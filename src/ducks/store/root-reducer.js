import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { connectRouter } from 'connected-react-router'
import loginReducer from '../login/reducer';

export default (history) => combineReducers({
    login: loginReducer,
    form,
    router: connectRouter(history),
});
