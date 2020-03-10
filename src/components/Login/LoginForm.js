import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/Inputs/Inputs";
import {required} from "../../helpers/validators/validators";

function LoginForm(props) {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]}/>
        </div>
        <div>
            <Field placeholder={'Password'} name={'password'} component={Input} validate={[required]}/>
        </div>
        <div>
            <Field type="checkbox" component={Input} name={'rememberMe'}/><span>remember me</span>
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
export default LoginReduxForm