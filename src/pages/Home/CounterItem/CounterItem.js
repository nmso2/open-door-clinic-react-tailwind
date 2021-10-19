import { CalendarIcon, UserGroupIcon, UsersIcon, EmojiHappyIcon } from '@heroicons/react/outline';
import React from 'react';

import { CountUp } from 'use-count-up'



const CounterItem = () => {
    return (
        <div>
            <div class="min-w-screen min-h-full bg-gray-100 flex items-center justify-center bg-gray-100 p-16">
                <div class="max-w-7xl w-full mx-auto py-6 sm:px-6 lg:px-8">
                    <p className="">SOME STATISTICS</p>
                    <h3 className="pb-16 text-4xl">OUR CLINIC IN NUMBERS</h3>
                    <div class="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">

                        <div class="w-full lg:w-1/4">
                            <div class="widget w-full p-4 rounded-lg bg-white border-l-4 border-blue-400">
                                <div class="flex items-center">
                                    <div class="icon w-14 p-3.5 bg-blue-400 text-white rounded-full mr-3">

                                        <UserGroupIcon />

                                    </div>
                                    <div class="flex flex-col justify-center">
                                        <div class=" text-6xl text-blue-400 "><CountUp isCounting end={2300} duration={5} />+</div>
                                        <div class="text-lg text-blue-400">Patients a year</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full lg:w-1/4">
                            <div class="widget w-full p-4 rounded-lg bg-white border-l-4 border-red-400">
                                <div class="flex items-center">
                                    <div class="icon w-14 p-3.5 bg-red-400 text-white rounded-full mr-3">
                                        <UsersIcon />
                                    </div>
                                    <div class="flex flex-col justify-center">
                                        <div class=" text-6xl text-red-400 "><CountUp isCounting end={47} duration={5} /></div>
                                        <div class="text-lg text-red-400">People working</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full lg:w-1/4">
                            <div class="widget w-full p-4 rounded-lg bg-white border-l-4 border-yellow-400">
                                <div class="flex items-center">
                                    <div class="icon w-14 p-3.5 bg-yellow-400 text-white rounded-full mr-3">
                                        <CalendarIcon />
                                    </div>
                                    <div class="flex flex-col justify-center">
                                        <div class=" text-6xl text-yellow-400 "><CountUp isCounting end={23} duration={5} /></div>
                                        <div class="text-lg text-yellow-400">Years of experience</div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="w-full lg:w-1/4">
                            <div class="widget w-full p-4 rounded-lg bg-white border-l-4 border-green-400">
                                <div class="flex items-center">
                                    <div class="icon w-14 p-3.5 bg-green-400 text-white rounded-full mr-3">

                                        <EmojiHappyIcon />

                                    </div>
                                    <div class="flex flex-col justify-center">
                                        <div class=" text-6xl text-green-400 "><CountUp isCounting end={8000} duration={5} />+</div>
                                        <div class="text-lg text-green-400">Happy smiles</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterItem;