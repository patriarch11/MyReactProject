import React from "react";
import Hardware from './Hardware/Hardware'
import Slider from "./CarouselBox/CarouselBox";
import s from './ContentVDS.module.css'

const ContentVDS = () => {
    return (
        <div className={s.hwWrapper}>
            <div className={s.mainText}>Select hardware configuration and operating system</div>
            <Hardware />

        </div>);
}
export default ContentVDS;