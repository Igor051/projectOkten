import React from "react";
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader/>
    }
    let contacts = props.profile.contacts
    return (
        <div>
            <div>
                <img
                    className={style.profileUpperPhoto}
                    src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"/>
            </div>
            <div>
                <img src={props.profile.photos.large} alt="avatar"/>
            </div>
            <div>
                <span>About me:</span> {props.profile.aboutMe} <br/>
                <div>{contacts.twitter == null ? null : <a href={contacts.twitter}>Twitter</a>}</div>
                <div>{contacts.website == null ? null : <a href={contacts.website}>Website</a>}</div>
                <div>{contacts.vk == null ? null : <a href={contacts.vk}>Vk</a>}</div>
                <div>{contacts.facebook == null ? null : <a href={contacts.facebook}>Facebook</a>}</div>
                <div>{contacts.instagram == null ? null : <a href={contacts.instagram}>Instagram</a>}</div>
                <div>{contacts.youtube == null ? null : <a href={contacts.youtube}>Youtube</a>}</div>
                <div>{contacts.github == null ? null : <a href={contacts.github}>Github</a>}</div>
                <div>{contacts.mainLink == null ? null : <a href={contacts.mainLink}>Main Link</a>}</div>
            </div>
        </div>
    )
}

export default ProfileInfo