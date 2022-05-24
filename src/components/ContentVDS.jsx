import React from "react";

const ContentVDS = () => {
    return (
        <div className='content'>
            <div className='mainText'>Select hardware configuration and operating system</div>
            <Hardware />
            <OsSlider />
        </div>);
}
const Hardware = () => {
    return (
        <div className='hardware'>
            <button id="light"></button>
            <button id="bronze"></button>
            <button id="silver"></button>
            <button id="gold"></button>
            <button id="platinum"></button>
        </div>
    );
}
const OsSlider = () => {
    return (
        <div className="os-slider">
            <button type="ut">prev</button>
            <img src='#'></img>
            <button>next</button>
        </div>);
}
export default ContentVDS;