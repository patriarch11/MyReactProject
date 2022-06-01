import React, { useState, useEffect } from 'react';
import slide1 from '../../../images/Microsoft_logo.jpg'
import slide2 from '../../../images/Linux_logo.png'
import slide3 from '../../../images/Android_logo.png'
import s from './Carousel.module.css'

const img = [
    <img key={slide1} src={slide1} />,
    <img key={slide2} src={slide2} />,
    <img key={slide3} src={slide3} />,
]

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setActiveIndex((current) => {

                const res = current === img.length - 1 ? 0 : current + 1

                return res
            })
        }, 3000)
        return () => clearInterval()
    }, [])

    const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
    const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1

    return (
        <div className={s.slider}>
            <div className={s.sliderImg + '' + s.sliderImgPrev}
                key={prevImgIndex}>
                {img[prevImgIndex]}
            </div>
            <div className={s.slider}
                key={activeIndex}>
                {img[activeIndex]}
            </div>
            <div className={s.sliderImg + '' + s.sliderImgNext}
                key={nextImgIndex}>
                {img[nextImgIndex]}
            </div>
        </div>
    )
}
export default Slider;