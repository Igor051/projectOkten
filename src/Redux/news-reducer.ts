import {newsAPI} from '../api/api'

const SET_NEWS = 'SET_NEWS';

type ArticleType = {
    source: { id: null | number, name: string }
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    content: string
    publishedAt: string

}

type InitialStateType = {
    news: {
        status: string
        totalResults: number
        articles: Array<ArticleType>
    }
}

let initialState: InitialStateType = {
    news: {
        status: 'ok',
        totalResults: 0,
        articles: [{
            source: {id: null, name: ''},
            author: '',
            title: '',
            description: '',
            url: '',
            urlToImage: '',
            content: '',
            publishedAt: ''
        }]
    }
};

const newsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_NEWS: {
            return {...state, news: action.news}
        }
        default: {
            return state
        }
    }
};

type SetNewsActionType = {
    type: typeof SET_NEWS
    news: InitialStateType
}

const setNews = (news: InitialStateType): SetNewsActionType => ({type: SET_NEWS, news});

export const getNews = () => async (dispatch: any) => {
    const news = await newsAPI.getNews();
    dispatch(setNews(news))
};
export default newsReducer