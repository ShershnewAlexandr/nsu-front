import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import TextInput from "../common/textInput/textInput";
import loginActions from "../../ducks/login/actions";
import validate from "./validate";
import "./login.scss";

function onLogin(values, dispatch) {
    const login = values.login;
    const password = values.password;

    return new Promise((resolve, reject) => {
        dispatch(loginActions.loginRequest(login, password, resolve, reject));
    }).catch(error => {
        throw new SubmissionError({_error: error});
    });
}

function Login(props) {
    const { handleSubmit, submitting, valid, error} = props;

    return (
        <div className="login__main-container">
            <form onSubmit={handleSubmit(onLogin)}>
                <Field
                    name="login"
                    label={"Логин"}
                    component={TextInput}
                    type="text"
                    disabled={submitting}
                />
                <Field
                    name="password"
                    label={"Пароль"}
                    component={TextInput}
                    type="text"
                    isPassword
                    disabled={submitting}
                />
                <button
                    type="submit"
                    className={`btn btn_login ${submitting ? "btn_loading" : ""}`}
                    disabled={!valid || submitting}
                >
                    Войти
                </button>
            </form>
        </div>
    );
}

export default connect(
    null, {
    }
)(
    reduxForm({ form: 'login', validate, initialValues: {login: "", password: ""} })(Login)
);
