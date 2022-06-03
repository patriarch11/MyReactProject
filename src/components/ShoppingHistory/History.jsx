import React from "react";
import { NavLink } from "react-router-dom";
import s from './History.module.css'



const ActiveSubItem = (props) => {

    let path = '/history/' + props.id;

    return (
        <div className={s.actSubItem}>
            <NavLink to={path}>{props.name}</NavLink>
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
    let hardwareData = [
        { id: 'light', name: 'Light', price: 15 },
        { id: 'bronze', name: 'Bronze', price: 20 },
        { id: 'silver', name: 'Silver', price: 30 },
        { id: 'gold', name: 'Gold', price: 40 },
        { id: 'platinum', name: 'Platinum', price: 50 }
    ];
    return (
        <div className={s.historyWrapper}>
            <div className={s.activeSub}>
                <p>Active subscriptions:
                    <ActiveSubItem name={hardwareData[0].name} id={hardwareData[0].id}></ActiveSubItem>
                </p>
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