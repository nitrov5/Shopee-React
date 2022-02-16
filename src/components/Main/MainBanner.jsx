import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { v4 as uuid } from "uuid";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import ButtonNext from "../UI/ButtonNext";
import ButtonPrev from "../UI/ButtonPrev";


const MainBanner = () => {
    const slides = [
        " ./images/ads2.jpeg",
        " ./images/ads1.jpeg",
        "./images/ads3.jpeg",
        "./images/ads4.jpeg",
        " ./images/ads5.gif",
        " ./images/ads6.jpeg",
        " ./images/ads7.jpeg",
        " ./images/ads8.jpeg",
        " ./images/ads9.png",
        " ./images/ads10.png",
    ];

    return (
        <div className='banner w-full  md:h-56 md:gap-1 flex items-center lg:px-10 xl:px-40 mx-auto bg-white  '>
            <div className='  main-banner overflow-hidden rounded h-32 md:h-full md:w-2/3 w-full text-gray-800 '>
                <Swiper
                    className='main-banner-swiper h-full relative group z-30'
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}>
                    {slides.map((slide ) => (
                        <SwiperSlide key={uuid()}>
                            <img src={slide} alt='' />
                        </SwiperSlide>
                    ))}
                    
                    <ButtonNext height={12} width={6}  />
                   <ButtonPrev />
                </Swiper>
            </div>
          

            <div className='right-banner hidden h-32 md:h-full rounded overflow-hidden md:w-1/3 md:flex flex-col items-start gap-1'>
                <img src='./images/right-banner-1.png' alt='' className='h-1/2 w-full object-cover' />
                <img src='./images/right-banner-2.png' alt='' className='h-1/2 w-full object-cover' />
            </div>
        </div>
    );
};

export default MainBanner;
