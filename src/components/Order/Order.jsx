import React from "react";
import CreditCard from "./PaymentWindow/CreditCard";
import s from './Order.module.css';
const Order = (props) => {
    return (
        <div className={s.orderWrapper}>
            <div className={s.server}>
                <p>Selected hardware:{props.hw}</p>
                <p>Selected OS:{props.osName}</p>
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
                <p>Total price: {props.price}</p>
            </div>
            <div className={s.cc}>
                <CreditCard />
                <button>Pay</button>
            </div>
        </div>
    )
}
export default Order;