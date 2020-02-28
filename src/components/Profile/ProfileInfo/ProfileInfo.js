import React from "react";
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import Contacts from "./Contacts";

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader/>
    }

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
                <ProfileStatus aboutMe={props.profile.aboutMe} status={props.status} updateStatus={props.updateStatus}/>
                <Contacts contacts={props.profile.contacts}/>
            </div>
        </div>
    )
}

export default ProfileInfo