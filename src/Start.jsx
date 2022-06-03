import React from "react";
import { NavLink } from "react-router-dom";

const Start = () => {
    return (
        <div className="startWrapper">
            <div className="signInBox">
                <div className="item">
                    <label htmlFor="user">Username</label>
                    <input type="text" itemID="user" />
                </div>
                <div className="item">
                    <label htmlFor="passwd">Password</label>
                    <input type='password'></input>
                </div>
                <NavLink>Sign in</NavLink>
            </div>
        </div>
    )
}
export default Start;