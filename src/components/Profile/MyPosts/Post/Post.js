import React from 'react';
import style from './Post.module.css'

function Post(props) {
    return (
        <div>
            <div>
                <img className={style.image}
                     src="https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg"/>
                {props.message}
            </div>
            <div>
                likes {props.likesCount}
            </div>
        </div>
    )
}

export default Post