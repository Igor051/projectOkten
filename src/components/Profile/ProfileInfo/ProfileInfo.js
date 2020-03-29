import React, {useState} from "react";
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import avatar from "../../../assets/images/avatar.png"
import profileUpperPhoto from '../../../assets/images/ProfileUpperPhoto.jpg'
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileData/ProfileDataForm";
import ProfileStatusWithHooks from "./ProfileData/ProfileStatusWithHooks";

function ProfileInfo(props) {
    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    };

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )

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
            {props.isOwner ? <ProfileStatusWithHooks status={props.status}
                                                     updateStatus={props.updateStatus}/> :
                <div>
                    <b>Status:</b> {props.status}
                </div>}

            {editMode ?
                <ProfileDataForm profile={props.profile} onSubmit={onSubmit} initialValues={props.profile}/> :
                <ProfileData profile={props.profile} isOwner={props.isOwner}
                             goToEditMode={() => setEditMode(true)}/>}
        </div>
    )
}

export default ProfileInfo