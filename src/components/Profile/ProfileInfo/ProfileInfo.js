import React from "react";
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import avatar from "../../../assets/images/avatar.png"
import profileUpperPhoto from '../../../assets/images/ProfileUpperPhoto.jpg'
import ProfileData from "./ProfileData/ProfileData";

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    };

    return (
        <div>
            <div>
                <img
                    className={style.profileUpperPhoto}
                    src={profileUpperPhoto}/>
            </div>
            <div>
                {<img src={props.profile.photos.large || avatar} alt="avatar" className={style.avatar}/>}
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            </div>
            <ProfileData profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}

export default ProfileInfo