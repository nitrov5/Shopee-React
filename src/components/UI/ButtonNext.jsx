const ButtonNext = ({buttonClasses} ) => {
    return (
        <div
            id={buttonClasses}
            className={` swiper-button-next w-9 h-12 bg-transparent  rounded-sm    hidden group-hover:flex absolute  m-0   top-1/2 -translate-y-1/2   group-hover:bg-black/30
            z-30  right-0    shadow-md  justify-center  items-center   transition-all  `}>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 flex justify-center items-center  text-white'
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

export default ButtonNext;
