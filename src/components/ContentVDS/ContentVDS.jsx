import React from "react";
import Hardware from './Hardware/Hardware'
import s from './ContentVDS.module.css'
import SliderOS from "./Slider/SliderOS";

const ContentVDS = () => {
    return (
        <div className={s.hwWrapper}>
            <div className={s.mainText}>Select hardware configuration and operating system</div>
            <Hardware />
            <SliderOS />
        </div>);
}
export default ContentVDS;