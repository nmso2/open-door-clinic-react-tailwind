import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 pt-10 sm:mt-10 pt-10">
                <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">


                    <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                            About Open Door Clinic
                        </div>
                        <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Open Door Clinic believes in providing quality medical, dental, and mental health care and health education to all people on Bangladesh, regardless of financial, geographic, or social barriers.</p>
                    </div>

                    <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                            Services
                        </div>

                        <Link to={`/service/${1}`} className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Pediatrics
                        </Link>
                        <Link to={`/service/${2}`} className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Cardiology
                        </Link>
                        <Link to={`/service/${3}`} className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Neurosurgery
                        </Link>
                    </div>

                    <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                            Contact Us
                        </div>

                        <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Mobile: +8801700000000</p>
                        <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Email: info@opendoor.com</p>
                        <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Address: Dhaka, Bangladesh</p>

                    </div>

                    <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                            Community
                        </div>

                        <Link to='/' className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            GitHub
                        </Link>
                        <Link to='/' className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Discord
                        </Link>
                        <Link to='/' className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Twitter
                        </Link>
                        <Link to='/' className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            YouTube
                        </Link>
                    </div>
                </div>

                <div className="pt-2">
                    <div className="flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-400 text-sm 
            flex-col md:flex-row max-w-6xl">
                        <div className="mt-2">
                            © Copyright 1998-2021. All Rights Reserved by <a className="uppercase" href="https://github.com/nmso2">Md. Nagib Mahfuz Subho.</a>
                        </div>

                        <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                            <Link to='/' className="w-6 mx-1">
                                <i className="uil uil-facebook-f"></i>
                            </Link>
                            <Link to='/' className="w-6 mx-1">
                                <i className="uil uil-twitter-alt"></i>
                            </Link>
                            <Link to='/' className="w-6 mx-1">
                                <i className="uil uil-youtube"></i>
                            </Link>
                            <Link to='/' className="w-6 mx-1">
                                <i className="uil uil-linkedin"></i>
                            </Link>
                            <Link to='/' className="w-6 mx-1">
                                <i className="uil uil-instagram"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;