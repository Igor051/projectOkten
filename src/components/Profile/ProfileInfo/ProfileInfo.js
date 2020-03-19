import React from "react";
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import Contacts from "./Contacts";
import avatar from "../../../assets/images/avatar.png"
import profileUpperPhoto from  '../../../assets/images/ProfileUpperPhoto.jpg'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    className={style.profileUpperPhoto}
                    src={profileUpperPhoto}/>
            </div>
            <div>
                {props.profile.photos.large ?
                    <img src={props.profile.photos.large} alt="avatar"/> :
                    <img src={avatar}
                         className={style.avatar}/>}
            </div>
            <div>
                <ProfileStatusWithHooks aboutMe={props.profile.aboutMe} status={props.status} updateStatus={props.updateStatus}/>
                <Contacts contacts={props.profile.contacts}/>
            </div>
        </div>
    )
}

export default ProfileInfo