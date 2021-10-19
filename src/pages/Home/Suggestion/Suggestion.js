import React from 'react';

const Suggestion = () => {
    return (
        <div className="mt-10">
            <div class="min-w-screen lg:flex items-center justify-center bg-gray-100 py-10">
                <div class="flex flex-col px-6 py-8 bg-white shadow-lg mx-10 my-5">
                    <h1 class="mb-8 font-extrabold text-gray-800 leading-6">Coronavirus - Facts,<br /> advice and measures</h1>
                    <ul class="flex flex-col space-y-4 text-gray-900">
                        <div class="bg-yellow-100 border-l-4 border-yellow-300 rounded-md w-full px-6 py-4 cursor-pointer">Facts and knowledge about COVID19</div>
                        <div class="bg-purple-100 border-l-4 border-purple-300 rounded-md w-full px-6 py-4 cursor-pointer">For the public</div>
                        <div class="bg-red-100 border-l-4 border-red-300 rounded-md w-full px-6 py-4 cursor-pointer">For the government</div>
                    </ul>
                </div>

                <div class="flex flex-col px-6 py-8 bg-white shadow-lg mx-10">
                    <h1 class="mb-8 font-extrabold text-gray-800 leading-6">Dengue - Facts,<br /> advice and measures</h1>
                    <ul class="flex flex-col space-y-4 text-gray-900">
                        <div class="bg-yellow-100 border-l-4 border-yellow-300 rounded-md w-full px-6 py-4 cursor-pointer">Facts and knowledge about Dengue</div>
                        <div class="bg-purple-100 border-l-4 border-purple-300 rounded-md w-full px-6 py-4 cursor-pointer">For the public</div>
                        <div class="bg-red-100 border-l-4 border-red-300 rounded-md w-full px-6 py-4 cursor-pointer">For the government</div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Suggestion;