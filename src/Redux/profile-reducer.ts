import {profileApi} from "../api/api";
import {stopSubmit} from "redux-form";
import {PostType, ProfileType, PhotosType} from "../types/types";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
    posts: [
        {id: 1, message: 'Hello friend', likesCount: '8'},
        {id: 2, message: 'Hi, bro. How are you ?', likesCount: '22'}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ''
};

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
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
                ...state, profile: {...state.profile, photos: action.photos} as ProfileType
            }
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        }
        default:
            return state
    }


};

type AddPostActionCreatorActionType = {
    type: typeof ADD_POST
    newPostText: string
}

export const addPostActionCreator = (newPostText: string): AddPostActionCreatorActionType => ({
    type: ADD_POST,
    newPostText
});

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile});
type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status});
type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({type: DELETE_POST, postId});
type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    const res = await profileApi.getUserProfile(userId);

    dispatch(setUserProfile(res.data))
};

export const getUserStatus = (userId: number) => async (dispatch: any) => {
    const res = await profileApi.getStatus(userId);

    dispatch(setStatus(res.data))
};
export const updateStatus = (status: string) => async (dispatch: any) => {
    const res = await profileApi.updateStatus(status);

    if (res.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
};

export const savePhoto = (file: any) => async (dispatch: any) => {
    const res = await profileApi.savePhoto(file);

    if (res.data.resultCode === 0) {
        dispatch(savePhotoSuccess(res.data.data.photos))
    }
};

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const useId = getState().auth.id;
    const res = await profileApi.saveProfile(profile);

    if (res.data.resultCode === 0) {
        dispatch(getUserProfile(useId))
    } else {
        dispatch(stopSubmit('editProfile', {_error: res.data.messages[0]}));
        return Promise.reject(res.data.messages[0])
    }
};

export default profileReducer