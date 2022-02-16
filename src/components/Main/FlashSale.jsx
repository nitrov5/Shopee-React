import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import CircleNext from "../UI/CircleNext";
import CirclePrev from "../UI/CirclePrev";
import ViewMore from "../UI/ViewMore";
import ChevronRight from "../UI/ChevronRight";
import { v4 as uuid } from "uuid";

const FlashSale = () => {
    const FlashSaleItems = [
        {
            aSrc: "#",
            salePercent: "64%",
            ofWhere: "Yêu thích",
            imgSrc_1: "./images/flash_sale/1.jpeg",
            imgSrc_2: "./images/flash_sale/50.png",
            price: 199000,
            totalSale: 0,
        },
        {
            aSrc: "#",
            salePercent: "64%",
            ofWhere: "Yêu thích",
            imgSrc_1: "./images/flash_sale/1.jpeg",
            imgSrc_2: "./images/flash_sale/50.png",
            price: 199000,
            totalSale: 2,
        },
        {
            aSrc: "#",
            salePercent: "64%",
            ofWhere: "Yêu thích",
            imgSrc_1: "./images/flash_sale/53_2.jpeg",
            imgSrc_2: "./images/flash_sale/52.png",
            price: 199000,
            totalSale: 0,
        },
        {
            aSrc: "#",
            salePercent: "98%",
            ofWhere: "",
            imgSrc_1: "./images/flash_sale/51_2.jpeg",
            imgSrc_2: "./images/flash_sale/51.png",
            price: 199000,
            totalSale: 2,
        },
        {
            aSrc: "#",
            salePercent: "64%",
            ofWhere: "Yêu thích",
            imgSrc_1: "./images/flash_sale/1.jpeg",
            imgSrc_2: "./images/flash_sale/50.png",
            price: 199000,
            totalSale: 0,
        },
        {
            aSrc: "#",
            salePercent: "64%",
            ofWhere: "Yêu thích",
            imgSrc_1: "./images/flash_sale/1.jpeg",
            imgSrc_2: "./images/flash_sale/50.png",
            price: 199000,
            totalSale: 2,
        },
        {
            aSrc: "#",
            salePercent: "64%",
            ofWhere: "Yêu thích",
            imgSrc_1: "./images/flash_sale/1.jpeg",
            imgSrc_2: "./images/flash_sale/50.png",
            price: 199000,
            totalSale: 0,
        },
        {
            aSrc: "#",
            salePercent: "64%",
            ofWhere: "Yêu thích",
            imgSrc_1: "./images/flash_sale/53_2.jpeg",
            imgSrc_2: "./images/flash_sale/52.png",
            price: 199000,
            totalSale: 2,
        },
        {
            aSrc: "#",
            salePercent: "98%",
            ofWhere: "",
            imgSrc_1: "./images/flash_sale/51_2.jpeg",
            imgSrc_2: "./images/flash_sale/51.png",
            price: 199000,
            totalSale: 2,
        },
        {
            aSrc: "#",
            salePercent: "64%",
            ofWhere: "Yêu thích",
            imgSrc_1: "./images/flash_sale/1.jpeg",
            imgSrc_2: "./images/flash_sale/50.png",
            price: 199000,
            totalSale: 2,
        } 
    ];
    return (
        <section className='flash-sale flex flex-col   mb-1 bg-white xl:mx-40'>
            <div className='flash-sale-header flex justify-between items-center px-4 py-3 h-16 lg:h-24'>
                <img src='./images/flash_sale/logo.png' alt='' className='h-2/3' />
                <a href='#' className='flex items-center font-thin text-gray-500 text-xs'>
                    Xem Tất Cả
                    <ChevronRight />
                </a>
            </div>

            <div className='flash-sale-items flex   group relative  '>
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={2.2}
                    slidesPerGroup={3}
                    spaceBetween={0}
                    navigation={{
                        nextEl: ".flash-sale-next",
                        prevEl: ".flash-sale-prev",
                    }}
                    breakpoints={{
                        1024: {
                            slidesPerView: 6,
                            slidesPerGroup: 6,
                        },
                    }}
                    tag={"ul"}
                    className=' flash-sale-swiper w-full py-2'>
                    {FlashSaleItems.map((item) => (
                        <SwiperSlide key={uuid()} tag={"li"} className='px-4'>
                            <a
                                href={item.aSrc}
                                className='h-full w-full flex flex-col justify-between lg:border relative '>
                                <div className='bg-yellow-400/80  w-12 h-10 uppercase text-xs flex flex-col items-center  absolute right-0 top-0 z-50'>
                                    <div className='flex flex-col items-center  h-full px-2 py-0.5 after:border-[20px] after:border-b-[6px] after:border-t-0 after:border-yellow-400/80 after:border-b-white after:w-full after:absolute after:bottom-0.5 after:translate-y-full'>
                                        <span className='text-red-500 font-semibold'>
                                            {item.salePercent}
                                        </span>
                                        <span className='text-white font-semibold'> Giảm</span>
                                    </div>
                                </div>

                                <div className='card-image relative h-2/3 w-full'>
                                    <img src={item.imgSrc_1} className='object-cover' />
                                    <img
                                        src={item.imgSrc_2}
                                        alt=''
                                        className='absolute bottom-0 left-1/2 -translate-x-1/2'
                                    />
                                </div>
                                <div className='price flex flex-col items-center justify-center  w-full lg:p-4'>
                                    <p className='text-red-500  w-full text-center'>d {item.price}</p>
                                    <p className=' rounded-full   relative w-full h-4 px-4 text-xs bg-red-200  text-white uppercase text-center flex-nowrap'>
                                        Đã bán {item.totalSale}
                                        {item.totalSale > 0 ? (
                                            <span className='bg-red-600 absolute left-0 top-0 w-1/12 h-full rounded-full'></span>
                                        ) : (
                                            <span></span>
                                        )}
                                    </p>
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                    <SwiperSlide tag={"li"} className='  px-4  '>
                        <ViewMore />
                    </SwiperSlide>
                </Swiper>

                <CircleNext customClass={"flash-sale-next  "} />

                <CirclePrev customClass={"flash-sale-prev "} />
            </div>
        </section>
    );
};

export default FlashSale;
