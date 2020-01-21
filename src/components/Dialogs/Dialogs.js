import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs(props) {

    let addMessage = () => {
        props.sendMessage()
    };

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text)
    };

    let DialogsElement = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}
                                                                             avatar={dialog.img} key={dialog.id}/>);
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message}
                                                                              key={message.id}/>);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {DialogsElement}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageChange} value={props.dialogsPage.newMessageText}
                              placeholder='Write a message...'/>
                </div>
                <div>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;