import Contacts from "./Contacts";
import style from '../ProfileInfo.module.css'
import commonStyle from '../../../common/common.module.css'
import React from "react";

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div className={style.profileData}>
        {isOwner && <div>
            <button className={commonStyle.button}  onClick={goToEditMode}>Edit</button>
        </div>}
        <div>
            <b>Full name: </b>{profile.fullName}
        </div>
        <div><b>About me:</b> {profile.aboutMe}</div>
        <div>
            <b> Looking for a job:</b> {profile.lookingForAJob ? 'Yes' : 'No'}
        </div>
        {profile.lookingForAJob &&
        <div><b>my professional skills:</b> {profile.lookingForAJobDescription}</div>
        }
        <Contacts contacts={profile.contacts}/>
    </div>
};

export default ProfileData