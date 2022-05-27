import React from "react";
import s from './ContentVDS.module.css'


const ContentVDS = () => {
    return (
        <div className={s.content}>
            <div className={s.mainText}>Select hardware configuration and operating system</div>
            <Hardware />
            <OsSlider />
        </div>);
}
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
const OsSlider = () => {
    return (
        <div className={s.osSlider}>
            <button className="prevBtn">prev</button>
            <img src='#' className="slideImg"></img>
            <button className="nextBtn">next</button>
        </div>);
}
export default ContentVDS;