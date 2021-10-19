import React from 'react';
import img1 from '../../resources/images/banner1.jpg'

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

        </div>
    );
};

export default AboutUs;