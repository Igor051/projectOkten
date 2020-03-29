import style from "../ProfileInfo.module.css";
import styleInput from '../../../common/Inputs/Inputs.module.css'
import React from "react";
import {createField, Input, Textarea} from "../../../common/Inputs/Inputs";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({profile, handleSubmit,error}) => {
    return <form onSubmit={handleSubmit} className={style.profileData}>
        <div>
            <button>save</button>
        </div>
        {
            error && <div className={styleInput.formSummaryError}>
                {error}
            </div>
        }
        <div>
            <b>Full name: </b>{createField('Full name', 'fullName', Input, [])}
        </div>
        <div><b>About me:</b></div>
        {createField('About you...', 'aboutMe', Textarea, [])}
        <div>
            <b> Looking for a job:</b>
            {createField('', 'lookingForAJob', Input, [], {type: 'checkbox'})}
        </div>
        <div><b>my professional skills:</b></div>
        {createField('Your skills', 'lookingForAJobDescription', Textarea, [])}
        {Object.keys(profile.contacts).map(key=>{
            return <div key={key}>
                <b>{key}: {createField(key, 'contacts.'+key, Input, [])}</b>
            </div>
        })}
    </form>
};

const ProfileDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm);

export default ProfileDataFormReduxForm