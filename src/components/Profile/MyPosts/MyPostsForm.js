import React from "react";
import {Field} from "redux-form";
import {reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../helpers/validators/validators";
import {Textarea} from "../../common/Inputs/Inputs";

const maxLength = maxLengthCreator(40);

function NewPostElement(props) {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name='newPostText' component={Textarea} validate={[required, maxLength]}
                   placeholder='Write post text..'/>
        </div>
        <div>
            <button>New post</button>
        </div>
    </form>
}

const NewPostElementForm = reduxForm({form: 'ProfileNewPostElementForm'})(NewPostElement);

export default NewPostElementForm