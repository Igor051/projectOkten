import React from "react";
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <div className={style.header}>
            <img src="https://www.sigcomm.org/sites/default/files/logos/sigcomm-dropshadow-spaced.png"/>
            <div className={style.loginBlock}>
                {props.isAuth ? <div className={style.login}>{props.login}</div> :
                    <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </div>
    )
}

export default Header