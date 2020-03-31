import {profileApi, securityAPI} from "../api/api";
import {toggleIsFetching} from "./users-reducer";
import {stopSubmit} from 'redux-form'

const SET_USER_DATA = 'auth-reducer/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';


let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.data
            };
        default:
            return state
    }
};

export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, data: {id, email, login, isAuth}});
const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, data: {captchaUrl}});

export const authMe = () => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const res = await profileApi.authMe();

    if (res.data.resultCode === 0) {
        dispatch(toggleIsFetching(false));
        let {id, email, login} = res.data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
};

export const loginUser = (email, password, rememberMe, captcha) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const res = await profileApi.login(email, password, rememberMe, captcha);

    if (res.data.resultCode === 0) {
        dispatch(authMe());
        dispatch(toggleIsFetching(false));
    } else {
        if (res.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        dispatch(toggleIsFetching(false));
        let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Email or password are incorrect';
        dispatch(stopSubmit('login', {_error: message}))
    }
};

export const logoutUser = () => async (dispatch) => {
    const res = await profileApi.logout();

    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
};

export const getCaptchaUrl = () => async (dispatch) => {
    const res = await securityAPI.getCaptchaUrl();
    const captchaUrl = res.data.url;

    dispatch(getCaptchaUrlSuccess(captchaUrl))
};

export default authReducer