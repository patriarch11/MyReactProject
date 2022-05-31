import React from "react";
import Hardware from './Hardware/Hardware'
import OsSlider from "./Slider/OsSlider";
import s from './ContentVDS.module.css'

const ContentVDS = () => {
    return (
        <div className={s.hwWrapper}>
            <div className={s.mainText}>Select hardware configuration and operating system</div>
            <Hardware />
            <OsSlider />
        </div>);
}
export default ContentVDS;