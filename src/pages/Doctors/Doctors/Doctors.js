import React from 'react';
import useDoctors from '../../../hooks/useDoctors';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors] = useDoctors();
    return (
        <div className="container mb-12 p-5 mt-10 mx-auto md:px-12">
            <h1 className="text-5xl">Our Doctors</h1>
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {
                    doctors.map(doctor => <Doctor doctor={doctor}></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;