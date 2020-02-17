import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/auth-reducer";
import {toggleIsFetching} from "../../Redux/users-reducer";
import {profileAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        profileAPI.authMe()
            .then(res => {
                this.props.toggleIsFetching(false);
                if (res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {setAuthUserData, toggleIsFetching})(HeaderContainer)