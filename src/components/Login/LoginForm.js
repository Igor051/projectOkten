import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/Inputs/Inputs";
import {required} from "../../helpers/validators/validators";
import style from '../common/Inputs/Inputs.module.css'

function LoginForm({handleSubmit, error}) {
    return <form onSubmit={handleSubmit}>
        {createField('Email', 'email', Input, [required])}
        {createField('Password', 'password', Input, [required], {type: 'password'})}
        {createField(null, 'rememberMe', Input, null, {type: 'checkbox'}, 'remember me')}
        {
            error && <div className={style.formSummaryError}>
                {error}
            </div>
        }
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
export default LoginReduxForm