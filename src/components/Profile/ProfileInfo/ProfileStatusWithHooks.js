import React, {useEffect, useState} from "react";

function ProfileStatusWithHooks(props) {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const activateEditMode = () => {
        setEditMode(true)
    };
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    };
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    };
    return <div>
        {!editMode &&
        <div><span onDoubleClick={activateEditMode}><b>Status:</b> {props.status || '-----'}</span></div>
        }
        {editMode &&
        <input onChange={onStatusChange}
               autoFocus={true} onBlur={deactivateEditMode} value={status}></input>
        }
        <div><b>About me:</b> {props.aboutMe}</div>
    </div>
}

export default ProfileStatusWithHooks