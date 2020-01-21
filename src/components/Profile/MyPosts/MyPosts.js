import React from 'react';
import Post from "./Post/Post";

function MyPosts(props) {
    let postsElement = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}
                                                     key={post.id}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost()
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    };
    return (
        <div>
            My posts
            <div>
                New post
            </div>
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}>New post
                </button>
            </div>
            {postsElement}
        </div>
    )
}

export default MyPosts