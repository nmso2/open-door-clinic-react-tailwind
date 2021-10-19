import React from 'react';
import useServices from '../../../hooks/useServices';
import CaroItem from '../CaroItem/CaroItem';
import CounterItem from '../CounterItem/CounterItem';
import Service from '../Service/Service';

const Home = () => {

    const [services] = useServices();

    return (
        <div>
            <CaroItem></CaroItem>
            {/* <div className="grid">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div> */}


            <h2 className="text-4xl mb-0 mt-12 flex flex-wrap -mx-1 lg:-mx-4 container mb-12 mx-auto px-4 md:px-12">Our Services</h2>
            <div className="container mb-12 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>
            
            <CounterItem></CounterItem>

        </div>
    );
};

export default Home;