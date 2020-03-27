import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getNews} from "../../Redux/news-reducer";

function News(props) {

    useEffect(() => {
        props.getNews()
    },[props.news.status]);
    return (
        <div>
            {props.news.articles && props.news.articles.map(article=><div>
                <div><a href={article.url}>{article.author}</a></div><br/>
                <div>{article.title}</div>
                <div>{article.description}</div>
                <hr/>
                </div>
            )}
        </div>
    )
}

let mapStateToProps = (state) => ({
    news: state.newsPage.news
});

export default connect(mapStateToProps, {getNews})(News)