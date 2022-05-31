import React from "react";
import s from './Footer.module.css'

function Footer() {
    return (
        <div className={s.footer}>
            Support
            <div className={s.contacts}>
                Telegram:<a href="https://t.me/white0502"> @white0502</a>
            </div>
        </div>
    );
}
export default Footer;