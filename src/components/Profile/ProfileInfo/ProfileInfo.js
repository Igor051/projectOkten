import React from "react";
import style from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"/>
            </div>
            <div>
                <img src={props.profile.photos.large} alt="avatar"/>
            </div>
            <div>
               <span>About me:</span> {props.profile.aboutMe}  <br/>
               <a href={props.profile.contacts.twitter}>Twitter</a>
            </div>
        </div>
    )
}

export default ProfileInfo