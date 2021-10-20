import React from 'react';
import img1 from '../../resources/images/banner1.jpg'
import img2 from '../../resources/images/childrens.jpg'

const AboutUs = () => {
    return (
        <div className="container-fluid lg:m-14 p-14">
            <div className="mb-10">
                <h1 className="text-6xl">Our Mission Statement</h1>
                <p className="text-2xl mb-5">Open Door Community Health Centers provides quality medical, dental, and mental health care and health education to all regardless of financial, geographic, or social barriers.</p>
                <hr />
            </div>
            <div className="mb-10 lg:flex">
                <img src={img1} alt="" />
                <p className="text-2xl p-5 text-justify">Open Door Clinic was founded with a vision to provide excellent health care and health education to an underserved part of Bangladesh, at a time when the region suffered from a shortage of access. Starting as a single clinic in 1998, Open Door now serving more than 2300 patients a year and employing almost 50 members of the community.</p>
            </div>
            <div className="mb-10 lg:flex">
                <p className="text-2xl p-5 text-justify lg:order-1 sm:order-2">Whether you're looking for general information related to child health or for more specific guidance on parenting issues, you've come to the right place. Best of all, you can rest assured that the information comes from the nation's leading child health experts and that we have scientific research supporting our recommendations.</p>
                <img src={img2} alt="" className="lg:order-2 sm:order-1"/>
            </div>

        </div>
    );
};

export default AboutUs;