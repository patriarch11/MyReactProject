import React from "react";
import s from './Settings.module.css'

const Settings = (props) => {
    return (
        <div className={s.settings}>
            <div className={s.item}>
                <label htmlFor="user">Username</label>
                <input type='text' placeholder={props.username} itemID='user'></input>
            </div>
            <div className={s.item}>
                <label htmlFor="passwd">Password</label>
                <input type="button" value='change' itemID='passwd' />
            </div>
            <div className={s.item}>
                <label htmlFor="mail"> Email</label>
                <input type='text' placeholder={props.email} itemID='mail'></input>
            </div>
            <div className={s.item}><label htmlFor="tg">Telegram</label>
                <input type='text' placeholder={props.telegram} itemID='tg'></input>
            </div>
            <div className={s.button}>
                <button>Save</button>
                <button>Exit</button>
            </div>
        </div >
    )
}
export default Settings;