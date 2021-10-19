import React from 'react';
import { useParams } from 'react-router';
import useServices from '../hooks/useServices';

const ServiceDetails = () => {
    const { ID } = useParams()

    const [services] = useServices();

    const service = services.filter(servise => parseInt(ID) === servise.id);
    return (
        <div>

            {
                services.filter(servise => parseInt(ID) === servise.id).map(service => <div>
                    <img src={service.img} alt="" />
                    <p>Name: {service.name}</p>
                    <p>Details:{service.details}</p>
                </div>)
            }


        </div>
    );
};

export default ServiceDetails;