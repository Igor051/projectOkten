import {newsAPI} from '../api/api'

const SET_NEWS = 'SET_NEWS';

let initialState = {
    news: []
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS: {
            return {...state, news: action.news}
        }
        default: {
            return state
        }
    }
};

const setNews = (news) => ({type: SET_NEWS, news});

export const getNews = () => async (dispatch) => {
    const news = await newsAPI.getNews();
    dispatch(setNews(news))
};
export default newsReducer