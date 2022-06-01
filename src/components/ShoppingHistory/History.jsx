import React from "react";
import { NavLink } from "react-router-dom";
import s from './History.module.css'



const ActiveSubItem = (props) => {

    let path = '/history/' + props.id;
    // let hwConfArray = ['Light', 'Bronze', 'Silver', 'Gold', 'Platinum'];
    return (
        <div className={s.actSubItem}>
            <NavLink to={path}>props.hwName</NavLink>
        </div>
    );
}
const PaymentHisItem = (props) => {
    return (
        <div className={s.payHisItem}>
            {props.payment}
        </div>
    )
}
const HistorySubItem = (props) => {
    return (
        <div className={s.histSubItem}>
            {props.histSub}
        </div>
    )
}

const History = (props) => {
    return (
        <div className={s.historyWrapper}>
            <div className={s.activeSub}>
                <p>Active subscriptions:</p>

            </div>
            <div className={s.paymentHis}>
                <p>Payment history:</p>

            </div>
            <div className={s.historySub}>
                <p>Subscription history:</p>

            </div>
        </div>
    )
}

export default History;