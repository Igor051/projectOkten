import React from "react";
import {Field} from "redux-form/es";
import {reduxForm} from "redux-form";

function NewPostElement(props) {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name='newPostText' component='textarea'/>
        </div>
        <div>
            <button>New post</button>
        </div>
    </form>
}

const NewPostElementForm = reduxForm({form: 'ProfileNewPostElementForm'})(NewPostElement);

export default NewPostElementForm