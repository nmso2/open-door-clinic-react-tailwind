import React from 'react';
import { useParams } from 'react-router';
import useServices from '../hooks/useServices';

const ServiceDetails = () => {
    const { ID } = useParams()

    const [services] = useServices();

    return (
        <div className="shadow-2xl m-12 p-8 lg:inline-block">

            {
                services.filter(servise => parseInt(ID) === servise.id).map(service => <div>
                    <img className="mx-auto" src={service.img} alt="" />
                    <p className="text-3xl p-5">{service.name}</p>
                    <p className="max-w-2xl text-lg">{service.details}</p>
                </div>)
            }


        </div>
    );
};

export default ServiceDetails;