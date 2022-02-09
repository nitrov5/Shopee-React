import React from "react";

const CirclePrev = ({ customClass }) => {
    return (
        <div
            className={`${customClass} swiper-button-prev w-6 h-6 bg-white rounded-full    hidden lg:flex absolute  m-0   top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 group-hover:scale-[2]  z-30 shadow-md  justify-center  items-center   transition-all `}>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                className={`h-4 w-4 text-gray-500`}
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 19l-7-7 7-7'
                />
            </svg>
        </div>
    );
};

export default CirclePrev;
