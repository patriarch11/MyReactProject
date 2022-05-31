import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css'

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div><NavLink to='/main'>Main</NavLink></div>
            <div><NavLink to='/order'>Order</NavLink></div>
            <div><NavLink to='/bonus'>Bonus points</NavLink></div>
            <div><NavLink to='/accsettings'>Account settings</NavLink></div>
        </nav>
    );
}
export default Nav;