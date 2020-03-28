import {profileApi} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {id: 1, message: 'Hello friend', likesCount: '8'},
        {id: 2, message: 'Hi, bro. How are you ?', likesCount: '22'}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: '0'
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            }
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        }
        default:
            return state
    }


};

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId) => async (dispatch) => {
    const res = await profileApi.getUserProfile(userId);

    dispatch(setUserProfile(res.data))
};

export const getUserStatus = (userId) => async (dispatch) => {
    const res = await profileApi.getStatus(userId);

    dispatch(setStatus(res.data))
};
export const updateStatus = (status) => async (dispatch) => {
    const res = await profileApi.updateStatus(status);

    if (res.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
};

export const savePhoto = (file) => async (dispatch) => {
    const res = await profileApi.savePhoto(file);

    if (res.data.resultCode === 0) {
        dispatch(savePhotoSuccess(res.data.data.photos))
    }
};

export default profileReducer