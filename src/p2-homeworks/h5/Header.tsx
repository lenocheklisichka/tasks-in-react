import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Header.module.css'
import {PATH} from "./Router";

function Header() {
    return (
        <div className={classes.boxLinks}>
            <div className={classes.menu}>
                <NavLink to={PATH.PRE_JUNIOR} className={classes.link}>PRE JUNIOR</NavLink>
                <NavLink to={PATH.JUNIOR} className={classes.link}>JUNIOR</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} className={classes.link}>JUNIOR PLUS</NavLink>
            </div>
            <div className={classes.circleMenu}>---<br/>---</div>
        </div>
    )
}

export default Header
