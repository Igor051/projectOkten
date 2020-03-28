import React from "react";
import style from '../ProfileInfo.module.css'

const Contacts = ({contacts}) => {
    return <div className={style.contacts}>
        {Object.keys(contacts).map(key => <Contact
            key={key}
            contactTitle={key}
            contactValue={contacts[key]}/>)}
    </div>
};

const Contact = ({contactTitle, contactValue}) => {
    return <div>{contactValue && <div><a href={contactValue}>{contactTitle}</a></div>}</div>
};

export default Contacts