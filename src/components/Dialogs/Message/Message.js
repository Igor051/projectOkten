import style from "./Message.module.css";
import React from "react";

function Message(props) {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

export default Message