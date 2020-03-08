import React from "react";
import style from './ProfileInfo.module.css'

function Contacts(props) {
return <div className={style.contacts}>
    <div>{props.contacts.twitter == null ? null : <a href={props.contacts.twitter}>Twitter</a>}</div>
    <div>{props.contacts.website == null ? null : <a href={props.contacts.website}>Website</a>}</div>
    <div>{props.contacts.vk == null ? null : <a href={props.contacts.vk}>Vk</a>}</div>
    <div>{props.contacts.facebook == null ? null : <a href={props.contacts.facebook}>Facebook</a>}</div>
    <div>{props.contacts.instagram == null ? null : <a href={props.contacts.instagram}>Instagram</a>}</div>
    <div>{props.contacts.youtube == null ? null : <a href={props.contacts.youtube}>Youtube</a>}</div>
    <div>{props.contacts.github == null ? null : <a href={props.contacts.github}>Github</a>}</div>
    <div>{props.contacts.mainLink == null ? null : <a href={props.contacts.mainLink}>Main Link</a>}</div>
</div>
}

export default Contacts