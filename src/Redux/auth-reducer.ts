import {profileApi, securityAPI} from "../api/api";
import {toggleIsFetching} from "./users-reducer";
import { stopSubmit } from "redux-form";


const SET_USER_DATA = 'auth-reducer/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

export type InitialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isFetching: boolean,
    isAuth: boolean,
    captchaUrl: string | null
}

let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action: any): InitialStateType => {
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

type SetAuthUserDataActionPayloadType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    data: SetAuthUserDataActionPayloadType
}
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
    type: SET_USER_DATA,
    data: {id, email, login, isAuth}
});

type GetCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    data: { captchaUrl: string }
}
const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    data: {captchaUrl}
});

export const authMe = () => async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    const res = await profileApi.authMe();

    if (res.data.resultCode === 0) {
        dispatch(toggleIsFetching(false));
        let {id, email, login} = res.data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
};

export const loginUser = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
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

export const logoutUser = () => async (dispatch: any) => {
    const res = await profileApi.logout();

    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
};

export const getCaptchaUrl = () => async (dispatch: any) => {
    const res = await securityAPI.getCaptchaUrl();
    const captchaUrl = res.data.url;

    dispatch(getCaptchaUrlSuccess(captchaUrl))
};

export default authReducer