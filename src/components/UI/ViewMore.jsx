
const ViewMore = ({ href }) => {
    return (
        <a href={href} className='md:hidden m-auto swiper-slide w-32'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-10 w-10 text-red-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1' d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z' />
            </svg>
            <p className='shopee-mall-promotion capitalize text-red-500 font-semibold whitespace-nowrap'>Xem thêm</p>
        </a>
    );
};

export default ViewMore;
