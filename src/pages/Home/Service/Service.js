import React from 'react';

const Service = (props) => {
    const { name, img, details } = props.service;
    return (
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg lg:min-h-full">

                    <img alt="Placeholder" className="block h-auto w-full" src={img}/>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-3xl">{name}</h1>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                        <p className="ml-2 text-lg">{details}</p>
                </footer>

                <button className="underline mb-3 hover:text-red-400">See more</button>
            </article>

        </div>
    );
};

export default Service;