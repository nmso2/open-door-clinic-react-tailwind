import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";


import banner1 from "../../../resources/images/banner1.jpg"
import banner2 from "../../../resources/images/banner2.jpg"
import banner3 from "../../../resources/images/banner3.jpg"
import banner4 from "../../../resources/images/banner4.jpg"

const CaroItem = () => {

    const responsive = {
        desktop: {
            breakpoint: {
                max: 1535,
                min: 768
            },
            items: 3,
            partialVisibilityGutter: 30
        },
        mobile: {
            breakpoint: {
                max: 639,
                min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
        },
        tablet: {
            breakpoint: {
                max: 767,
                min: 640
            },
            items: 2,
            partialVisibilityGutter: 30
        }
    };

    return (
        <div className="my-3">
            <Carousel responsive={responsive}
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={2000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                showDots={false}
            >
                <div className="mx-3">
                    <img className="z-0" src={banner1} alt="" />
                </div>
                <div className="mx-3"><img src={banner2} alt="" /></div>
                <div className="mx-3"><img src={banner3} alt="" /></div>
                <div className="mx-3"><img src={banner4} alt="" /></div>
            </Carousel>
        </div>
    );
};

export default CaroItem;