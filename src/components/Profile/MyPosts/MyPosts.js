import React from 'react';
import Post from "./Post/Post";
import NewPostElementForm from "./MyPostsForm";

const MyPosts = React.memo(props => {
    let postsElement = [...props.posts].reverse().map(post => <Post message={post.message} likesCount={post.likesCount}
                                                                    key={post.id}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    };

    return (
        <div>
            <b>My posts</b>

            <NewPostElementForm onSubmit={onAddPost}/>
            {postsElement}
        </div>
    )
});

export default MyPosts