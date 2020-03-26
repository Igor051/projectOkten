import React, {Suspense} from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./Redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const News = React.lazy(() => import('./components/News/News'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const Music = React.lazy(() => import('./components/Music/Music'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/news' render={withSuspense(News) }/>
                    <Route path='/settings' render={withSuspense(Settings)}/>
                    <Route path='/music' render={withSuspense(Music)}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {initialized: state.app.initialized}
);

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SocialNetworkApp = (props) => {
    return <Provider store={store}>
        <BrowserRouter>
            <AppContainer/>
        </BrowserRouter>
    </Provider>
};

export default SocialNetworkApp
