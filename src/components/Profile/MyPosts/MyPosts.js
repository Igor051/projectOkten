import React from 'react';
import Post from "./Post/Post";
import {reduxForm} from "redux-form";
import {Field} from "redux-form/es";
import NewPostElementForm from "./MyPostsForm";

function MyPosts(props) {
    let postsElement = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}
                                                     key={post.id}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    };

    return (
        <div>
            My posts
            <div>
                New post
            </div>
            <NewPostElementForm onSubmit={onAddPost}/>
            {postsElement}
        </div>
    )
}

export default MyPosts