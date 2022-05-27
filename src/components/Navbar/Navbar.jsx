import React from "react";
import s from './Navbar.module.css'

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div><a href='#'>Main</a></div>
            <div><a href='#'>Order</a></div>
            <div><a href='#'>Bonus points</a></div>
            <div><a href='#'>Account settings</a></div>
        </nav>
    );
}
export default Nav;