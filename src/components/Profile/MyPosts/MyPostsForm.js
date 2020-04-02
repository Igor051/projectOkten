import React from "react";
import btnStyle from '../../common/common.module.css'
import style from './MyPosts.module.css'
import {Field} from "redux-form";
import {reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../helpers/validators/validators";
import {Textarea} from "../../common/Inputs/Inputs";

const maxLength = maxLengthCreator(40);

function NewPostElement(props) {
    return <form className={style.postElementForm} onSubmit={props.handleSubmit}>
        <div className={style}>
            <Field name='newPostText' component={Textarea} validate={[required, maxLength]}
                   placeholder='Write post text..'/>
        </div>
        <div>
            <button className={btnStyle.button}>New post</button>
        </div>
    </form>
}

const NewPostElementForm = reduxForm({form: 'ProfileNewPostElementForm'})(NewPostElement);

export default NewPostElementForm