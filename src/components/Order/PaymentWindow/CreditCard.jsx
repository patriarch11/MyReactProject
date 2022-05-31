import React from "react";
import s from "./CreditCard.module.css"
const CreditCard = () => {
    return (
        <div className={s.cc}>
            <div className={s.track}>
            </div>
            <div className={s.number}>
                <label>Card number</label>
                <input type="number" maxLength={16} placeholder="xxxx xxxx xxxx xxxx" required />
            </div>
            <div className={s.expCvvWrap}>
                <div className={s.exp}>
                    <label>EXP</label>
                    <input type="month" required min='2018-05' max='2027-05' />
                </div>
                <div className={s.cvv}>
                    <label>CVV</label>
                    <input type="password" required />
                </div>
            </div>
        </div>
    )
}
export default CreditCard;