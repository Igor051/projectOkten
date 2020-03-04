import React from "react";
import {Field, reduxForm} from "redux-form";

function LoginForm(props) {
    return <form onSubmit={props.handleSubmit}>
        <div>commit test</div>
        <div>
            <Field placeholder={'Login'} name={'login'} component={'input'}/>
        </div>
        <div>
            <Field placeholder={'Password'} name={'password'} component={'input'}/>
        </div>
        <div>
            <Field type="checkbox" component={'input'} name={'rememberMe'}/><span>remember me</span>
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
export default LoginReduxForm