import React from 'react';
import useDoctors from '../../../hooks/useDoctors';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors] = useDoctors();
    return (


        <div className="container mb-12 mx-auto p-20 px-4 md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {
                    doctors.map(doctor => <Doctor doctor={doctor}></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;