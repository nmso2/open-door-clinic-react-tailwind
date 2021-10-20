import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = (props) => {
    const { title, details, img } = props.blog;
    return (
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            <div className="overflow-hidden rounded-lg shadow-md lg:min-h-full hover:shadow-2xl duration-500">

                <img src={img} alt="" className="mx-auto" />

                <div className="p-4">
                    <h3 className="font-medium text-black-600 text-lg my-2 uppercase">{title}</h3>
                    <p className="text-justify text-gray-600">{details}</p>
                    <div className="mt-5">
                        <Link to="/" className="hover:bg-gray-700 rounded-full py-2 px-3 font-semibold hover:text-white bg-gray-400 text-gray-100">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogItem;