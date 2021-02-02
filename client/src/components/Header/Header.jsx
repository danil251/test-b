import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.header}>
            <NavLink to="/downloadPage" activeClassName={s.active} className={s.link}>
                <span>DownloadPage</span>
            </NavLink>
            <NavLink to="/editPage" activeClassName={s.active} className={s.link}>
                <span>EditPage</span>
            </NavLink>
        </div>
    )
}

export default Header