import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import AddMessageFormRedux from "./DialogsForm";

function Dialogs(props) {

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    };

    let DialogsElement = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}
                                                                             avatar={dialog.img} key={dialog.id}/>);
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message}
                                                                              key={message.id}/>);

    if (!props.isAuth) return <Redirect to={'/login'}/>;

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {DialogsElement}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>

        </div>
    )
}

export default Dialogs;