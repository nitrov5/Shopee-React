import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Grid } from "swiper";
import { v4 as uuid } from "uuid";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/grid";

import ChevronRight from "../UI/ChevronRight";
import CircleNext from "../UI/CircleNext";
import CirclePrev from "../UI/CirclePrev";
import ButtonNext from "../UI/ButtonNext";
import ButtonPrev from "../UI/ButtonPrev";

const ShopeeMall = () => {
    const mobileSlides = [
        { imgSrc: "./images/shopee_mall/1.png" },
        { imgSrc: "./images/shopee_mall/2.png" },
        { imgSrc: "./images/shopee_mall/3.png" },
        { imgSrc: "./images/shopee_mall/4.png" },
        { imgSrc: "./images/shopee_mall/5.png" },
        { imgSrc: "./images/shopee_mall/6.png" },
    ];
    const desktopSlides = [
        { imgSrc: "./images/shopee_mall/laptop/1.png" },
        { imgSrc: "./images/shopee_mall/laptop/2.png" },
        { imgSrc: "./images/shopee_mall/laptop/3.png" },
        { imgSrc: "./images/shopee_mall/laptop/4.png" },
        { imgSrc: "./images/shopee_mall/laptop/5.png" },
        { imgSrc: "./images/shopee_mall/laptop/6.png" },
    ];

    const productSlides = [
        {
            aSrc: "#",
            imgSrc: "./images/shopee_mall/product1.png",
            description: "mua 1 tặng 1",
        },
        {
            aSrc: "#",
            imgSrc: "./images/shopee_mall/product2.png",
            description: "da khỏe sạch mụn",
        },
        {
            aSrc: "#",
            imgSrc: "./images/shopee_mall/product3.png",
            description: "mua là có quà",
        },

        { aSrc: "#", imgSrc: "./images/shopee_mall/product1.png", description: "mua 1 tặng 1" },
        { aSrc: "#", imgSrc: "./images/shopee_mall/product2.png", description: "da khỏe sạch mụn" },
        { aSrc: "#", imgSrc: "./images/shopee_mall/product3.png", description: "mua là có quà" },
        { aSrc: "#", imgSrc: "./images/shopee_mall/product1.png", description: "mua 1 tặng 1 " },
        { aSrc: "#", imgSrc: "./images/shopee_mall/product2.png", description: "da khỏe sạch " },
        { aSrc: "#", imgSrc: "./images/shopee_mall/product3.png", description: "mua là có quà" },
        { aSrc: "#", imgSrc: "./images/shopee_mall/product1.png", description: "mua 1 tặng 1 " },
        { aSrc: "#", imgSrc: "./images/shopee_mall/product2.png", description: "da khỏe sạch " },
        { aSrc: "#", imgSrc: "./images/shopee_mall/product3.png", description: "mua là có quà" },
        { aSrc: "#", imgSrc: "./images/shopee_mall/product1.png", description: "mua 1 tặng 1 " },
        { aSrc: "#", imgSrc: "./images/shopee_mall/product2.png", description: "da khỏe sạch " },
        { aSrc: "#", imgSrc: "./images/shopee_mall/product3.png", description: "mua là có quà" },
        { aSrc: "#", imgSrc: "./images/shopee_mall/product1.png", description: "mua 1 tặng 1 " },
        { aSrc: "#", imgSrc: "./images/shopee_mall/product2.png", description: "da khỏe sạch " },
        { aSrc: "#", imgSrc: "./images/shopee_mall/product3.png", description: "mua là có quà" },
        { aSrc: "#", imgSrc: "./images/shopee_mall/product1.png", description: "mua 1 tặng 1" },
    ];
    return (
        <section className='shopee-mall flex relative flex-col pt-5 bg-white xl:mx-40  '>
            <div className='shopee-mall-header flex items-center justify-between px-5 pb-2 border-b'>
                <p className='uppercase text-red-500 font-semibold text-lg'>shopee mall</p>
                <ul className='md:flex hidden flex-1 ml-4 items-center gap-6'>
                    <li className='flex items-center gap-1'>
                        <img src='./images/shopee_mall/header/1.png' alt='' className='w-4 h-4' />
                        <span className='text-black'>7 Ngày Miễn Phí Trả Hàng</span>
                    </li>
                    <li className='flex items-center gap-1'>
                        <img src='./images/shopee_mall/header/2.png' alt='' className='w-4 h-4' />
                        <span className='text-black'>Hàng Chính Hãng 100% </span>
                    </li>
                    <li className='flex items-center gap-1'>
                        <img src='./images/shopee_mall/header/3.png' alt='' className='w-4 h-4' />
                        <span className='text-black'>Miễn Phí Vận Chuyển</span>
                    </li>
                </ul>
                <a href='#' className='md:hidden flex items-center font-thin text-gray-600 text-xs'>
                    Xem thêm <ChevronRight />
                </a>
                <a
                    href='#'
                    className='text-red-500 hidden md:flex items-center justify-center text-sm font-semibold gap-2'>
                    Xem Tất Cả
                    <ChevronRight />
                </a>
            </div>

            <ul className='shopee-mall-title md:hidden flex items-center justify-between gap-2'>
                <li className='flex items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4 flex-none'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                    </svg>
                    <span className='text-least md:text-base flex-nowrap'>Miễn phí trả hàng</span>
                </li>
                <li className='flex items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4 flex-none'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                    </svg>
                    <span className='text-least md:text-base flex-nowrap'>Chính hãng 100%</span>
                </li>
                <li className='flex items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4 flex-none'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                    </svg>
                    <span className='text-least md:text-base flex-nowrap'>Giao miễn phí</span>
                </li>
            </ul>

            <div className='shopee-mall-container relative flex flex-col md:flex-row space-y-2 items-center '>
                {/* Mobile */}
                <div className='shopee-mall-swiper-mobile relative  overflow-hidden  md:hidden'>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        autoplay={{ delay: 2000 }}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        className='w-full h-full shopee-mall-swiper '>
                        {mobileSlides.map((item) => (
                            <SwiperSlide key={uuid()}>
                                <img src={item.imgSrc} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Desktop */}
                <div className='shopee-mall-swiper-laptop   relative  hidden md:flex overflow-hidden md:w-1/3  md:h-[32rem]  p-[10px] pr-0'>
                    <Swiper
                        modules={[Pagination, Autoplay, Navigation]}
                        autoplay={{ delay: 4000 }}
                        slidesPerView={1}
                        navigation={{ nextEl: "#shopee-mall-next", prevEl: "#shopee-mall-prev" }}
                        pagination={{ clickable: true }}
                        className='relative shopee-mall-swiper border w-full h-full group '>
                        {desktopSlides.map((item) => (
                            <SwiperSlide key={uuid()} className='w-full'>
                                <img src={item.imgSrc} className='object-cover w-full flex ' />
                            </SwiperSlide>
                        ))}
                        <ButtonNext buttonClasses={"shopee-mall-next"} />
                        <ButtonPrev buttonClasses={"shopee-mall-prev"} />
                    </Swiper>
                </div>

                <div className='shopee-mall-product-container group   w-full md:w-2/3 h-full relative'>
                    <Swiper
                        modules={[Navigation, Grid]}
                        slidesPerView={4}
                        slidesPerGroup={4}
                        allowTouchMove={true}
                        grid={{ rows: 2, fill: "row" }}
                        breakpoints={{
                            768: {
                                allowTouchMove: true,
                                grid: {
                                    rows: 2,
                                    fill: "row",
                                },
                            },
                            1200: {
                                allowTouchMove: false,
                                grid: {
                                    rows: 2,
                                    fill: "row",
                                },
                            },
                        }}
                        navigation={{
                            nextEl: ".shopee-mall-product-next",
                            prevEl: ".shopee-mall-product-prev",
                        }}
                        className='shopee-mall-products-swiper'>
                        {productSlides.map((product) => (
                            <SwiperSlide key={uuid()} className='  p-[10px]'>
                                <a
                                    href={product.aSrc}
                                    className='flex flex-col items-center  justify-between  border   md:border-0  rounded cursor-pointer  h-4/5  w-28   '>
                                    <img src={product.imgSrc} alt='' />
                                </a>
                                <p className='text-red-600  font-bold capitalize  text-xs  whitespace-nowrap  md:text-base md:font-normal  flex flex-col justify-center  w-full  text-center  h-1/5'>
                                    {product.description}
                                </p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <CircleNext customClass={"shopee-mall-product-next"} />

                    <CirclePrev customClass={"shopee-mall-product-prev"} />
                </div>
            </div>
        </section>
    );
};

export default ShopeeMall;
