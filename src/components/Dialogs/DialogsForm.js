import React from "react";
import btnStyle from '../common/common.module.css'
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/Inputs/Inputs";
import {required, maxLengthCreator} from "../../helpers/validators/validators";

const maxLength100 = maxLengthCreator(100);

function AddMessageForm(props) {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} validate={[required, maxLength100]}
                   name='newMessageBody' placeholder='Write a message...'/>
        </div>
        <div>
            <button className={btnStyle.button}>Send</button>
        </div>
    </form>
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default AddMessageFormRedux