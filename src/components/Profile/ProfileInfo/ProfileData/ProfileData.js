import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import Contacts from "./Contacts";
import style from '../ProfileInfo.module.css'
import React from "react";

const ProfileData = ({profile, status, updateStatus}) => {
    return <div className={style.profileData}>
        <div>
            <b>Full name: </b>{profile.fullName}
        </div>
        <ProfileStatusWithHooks aboutMe={profile.aboutMe} status={status}
                                updateStatus={updateStatus}/>
        <div>
            <b> Looking for a job:</b> {profile.lookingForAJob ? 'Yes' : 'No'}
        </div>
        {profile.lookingForAJob &&
        <div><b>my professional skills</b> {profile.lookingForAJobDescription}</div>
        }
        <Contacts contacts={profile.contacts}/>
    </div>
};

export default ProfileData