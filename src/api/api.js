import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
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
    },
};

export const profileApi = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
    authMe() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/login')
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put('profile/photo', formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
};

export const newsAPI = {
    getNews() {
        return axios.get('http://newsapi.org/v2/top-headlines?country=ua&apiKey=bc8466bc07114094990dd3fc378665e8')
            .then(res => res.data)
    }
};








