import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/Inputs/Inputs";
import {required} from "../../helpers/validators/validators";
import style from '../common/Inputs/Inputs.module.css'

function LoginForm({handleSubmit, error, captchaUrl}) {
    return <form onSubmit={handleSubmit}>
        {createField('Email', 'email', Input, [required])}
        {createField('Password', 'password', Input, [required], {type: 'password'})}
        {createField(null, 'rememberMe', Input, null, {type: 'checkbox'}, 'remember me')}
        {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
        {captchaUrl && createField('Enter symbols from image','captcha',Input,[required])}
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