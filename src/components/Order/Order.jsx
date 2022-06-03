import React from "react";
import CreditCard from "./PaymentWindow/CreditCard";
import s from './Order.module.css';


const SelectedHw = (props) => {
    return (
        <div>
            {props.name}
        </div>
    )
}

const Order = (props) => {

    let hardwareData = [
        { id: 'light', name: 'Light', price: 15 },
        { id: 'bronze', name: 'Bronze', price: 20 },
        { id: 'silver', name: 'Silver', price: 30 },
        { id: 'gold', name: 'Gold', price: 40 },
        { id: 'platinum', name: 'Platinum', price: 50 }
    ];

    return (
        <div className={s.orderWrapper}>
            <div className={s.server}>
                <p>Selected hardware:
                    <SelectedHw name={hardwareData[0].name} />
                </p>
                <p>Selected OS:</p>
                <p>Select rental period:
                    <select name="" id="">
                        <option value="1">1 month</option>
                        <option value="2">2 month</option>
                        <option value="3">3 month</option>
                        <option value="4">4 month</option>
                        <option value="5">5 month</option>
                        <option value="6">6 month</option>
                        <option value="7">7 month</option>
                        <option value="8">8 month</option>
                        <option value="9">9 month</option>
                        <option value="10">10 month</option>
                        <option value="11">11 month</option>
                        <option value="12">12 month</option>
                    </select>
                </p>
                <p>Total price: </p>
            </div>
            <div className={s.cc}>
                <CreditCard />
                <button>Pay</button>
            </div>
        </div>
    )
}
export default Order;