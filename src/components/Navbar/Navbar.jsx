import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css'
import './link.css'

const SetActive = ({ isActive }) => isActive ? 'active' : '';

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={SetActive}>
                <NavLink to='/main' >Main</NavLink>
            </div>
            <div className={SetActive}>
                <NavLink to='/order'>Order</NavLink>
            </div>
            <div className={SetActive}>
                <NavLink to='/history'>Shopping history</NavLink>
            </div>
            <div className={SetActive}>
                <NavLink to='/accsettings'>Account settings</NavLink>
            </div>
        </nav >
    );
}
export default Nav;