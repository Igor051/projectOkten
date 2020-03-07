import React from "react";
import {Field, reduxForm} from "redux-form";

function AddMessageForm(props) {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component='textarea' name='newMessageBody' placeholder='Write a message...'/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}

const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm);

export default AddMessageFormRedux