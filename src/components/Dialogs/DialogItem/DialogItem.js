import style from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

function DialogItem(props) {

    let path = "/dialogs/" + props.id

    return (
        <div className={style.dialog + ' ' + style.active}>
            <img src={props.avatar} alt="avatar" className={style.avatar}/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem