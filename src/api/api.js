import * as axios from "axios";

const baseURL=`https://social-network.samuraijs.com/api/1.0/`

const instance = axios.create({
    withCredentials: true,
    baseURL,
    headers: {
        "API-KEY": "94d2bee9-4030-4d4e-a85a-00f673b6f3ac"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(res => res.data);
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`).then(res => res.data.resultCode)
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`).then(res => res.data.resultCode)
    }
};

export const profileAPI={
    getUserProfile(userId){
        return axios.get(`${baseURL}profile/${userId}`)
    },
    authMe(){
        return axios.get(`${baseURL}auth/me`,{withCredentials: true})
    }
};





