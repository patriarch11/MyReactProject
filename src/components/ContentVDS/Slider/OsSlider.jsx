import React from "react";
import "./OsSlider.css"
import { Carousel } from './Carousel/Carousel';


export default function OsSlider() {
    return (
        <Carousel>
            <div className="item windows">item 1</div>
            <div className="item linux">item 2</div>
            <div className="item android">item 3</div>
            <div className="item macOs">item 4</div>
        </Carousel>);
}
