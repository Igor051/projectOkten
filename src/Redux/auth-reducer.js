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
                ...action.data,
                isAuth: true
            };
        default:
            return state
    }
};

export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}});

export const authMe = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        profileApi.authMe()
            .then(res => {
              dispatch(toggleIsFetching(false));
                if (res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data;
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
}

export default authReducer