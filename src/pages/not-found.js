import React from 'react';

export default function NotFound() {
    return (
        <div 
        className="
            relative bg-[url('../../public/images/not-found.jpg')] 
            bg-no-repeat 
            bg-center 
            bg-cover">
                <div className="bg-[rgba(0,0,0,.2)] flex flex-col justify-center align-middle w-full min-h-screen">
                    <h1 className="text-center mb-3 text-gray-100 opacity-20 font-gothic text-[98px] lg:leading-[1.2] lg:text-[462.022px]">404</h1>
                    <p className="text-white font-lightexp text-center text-sm pb-5 lg:text-4xl">Page not found</p>
                </div>
        </div>
    )
}