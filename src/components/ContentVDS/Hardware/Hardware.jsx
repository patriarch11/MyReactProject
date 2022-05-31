import React from "react";
import s from './Hardware.module.css'


const Hardware = () => {
    return (
        <div className={s.hardware}>
            <div className={s.light}>
                <label>Light 15$/month
                    <button ></button>
                </label>
            </div>
            <div className={s.bronze}>
                <label>Bronze 20$/moth
                    <button ></button>
                </label>
            </div>
            <div className={s.silver}>
                <label>Silver 30$/month
                    <button ></button>
                </label>
            </div>
            <div className={s.gold}>
                <label>Gold 40$/month
                    <button ></button>
                </label>
            </div>
            <div className={s.platinum}>
                <label> Platinum 50$/month
                    <button ></button>
                </label>
            </div>
        </div >
    );
}

export default Hardware;