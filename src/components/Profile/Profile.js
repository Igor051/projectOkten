import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import style from './Profile.module.css'
import profileUpperPhoto from "../../assets/images/ProfileUpperPhoto.jpg";

function Profile(props) {
    return (
        <div>
            <div>
                <img
                    className={style.profileUpperPhoto}
                    src={profileUpperPhoto}/>
            </div>
            <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status}
                         updateStatus={props.updateStatus} savePhoto={props.savePhoto} saveProfile={props.saveProfile}/>

            <MyPostsContainer/>
        </div>
    )
}

export default Profile