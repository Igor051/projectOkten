import {profileApi} from "../api/api";
import {toggleIsFetching} from "./users-reducer";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        default:
            return state
    }
};

export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, data: {id, email, login, isAuth}});

export const authMe = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        profileApi.authMe()
            .then(res => {
                dispatch(toggleIsFetching(false));
                if (res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data;
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
    }
};

export const loginUser = (email, password, rememberMe) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    profileApi.login(email, password, rememberMe)
        .then(res => {
            dispatch(toggleIsFetching(false));
            if (res.data.resultCode === 0) {
                dispatch(authMe())
            }
        })
};

export const logoutUser = () => (dispatch) => {
    profileApi.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
};

export default authReducer