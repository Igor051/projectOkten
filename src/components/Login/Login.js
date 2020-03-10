import React from "react";
import LoginReduxForm from "./LoginForm";
import {connect} from "react-redux";
import {loginUser} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";

function Login(props) {
    const onSubmit = (formData) => {
        props.loginUser(formData.email, formData.password, formData.rememberMe)
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {loginUser})(Login)