import React from "react";

const CircleNext = ({customClass}) => {
    return (
        <div
            className={`${customClass} swiper-button-next w-6  h-6 bg-white  rounded-full   hidden md:flex absolute  m-0   top-1/2 -translate-y-1/2   
            z-50  right-0  translate-x-1/2 group-hover:scale-[2]  shadow-md  justify-center  items-center   transition-all`}>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4 flex justify-center items-center  text-gray-600  '
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 5l7 7-7 7'
                />
            </svg>
        </div>
    );
};

export default CircleNext;
