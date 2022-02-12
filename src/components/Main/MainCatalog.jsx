import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { v4 as uuid } from "uuid";

const MainCatalog = () => {
    const DUMMY_SLIDES = [
        {
            imgSrc: "./images/menuItems/1.png",
            descr: "Khung Giờ Săn Sale",
        },
        {
            imgSrc: "./images/menuItems/4.png",
            descr: "Deal Gần Bạn - Chỉ Từ 1K",
        },
        {
            imgSrc: "./images/menuItems/2.png",
            descr: "Gì Cũng Rẻ - Từ 1K",
        },
        {
            imgSrc: "./images/menuItems/3.png",
            descr: "Nhận Free 20K",
        },
        {
            imgSrc: "./images/menuItems/4.png",
            descr: "Freeship Xtra Đến 70K Mỗi Ngày",
        },
        {
            imgSrc: "./images/menuItems/1.png",
            descr: "Ưu Đãi Thành Viên",
        },
        {
            imgSrc: "./images/menuItems/2.png",
            descr: "Shopee Premium",
        },
        {
            imgSrc: "./images/menuItems/3.png",
            descr: "Shopee Mart - Siêu thị 0Đ",
        },
        {
            imgSrc: "./images/menuItems/4.png",
            descr: "Miễn Phí Vận Chuyển",
        },
        {
            imgSrc: "./images/menuItems/1.png",
            descr: "Ưu Đãi Đối Tác ",
        },
        {
            imgSrc: "./images/menuItems/2.png",
            descr: "Mã Giảm Giá",
        },
        {
            imgSrc: "./images/menuItems/4.png",
            descr: "Shopee Food - Đại tiệc - 50%",
        },
    ];
    return (
        <section className='main-catalog   flex bg-white mt-0 md:mt-auto flex-col items-center  relative xl:px-40 rounded-sm'>
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                modules={[Grid]}
                grid={{ rows: 2, fill: "row" }}
                breakpoints={{
                    1024: {
                        grid: {
                            rows: 1,
                            fill: "row",
                        },
                        slidesPerView: 8,
                        spaceBetween: 10,
                        allowTouchMove: false
                    },
                }}
                className='main-catalog-swiper py-5 px-1  '>
                {DUMMY_SLIDES.map((slide) => (
                    <SwiperSlide
                        key={uuid()}
                        tag={"a"}
                        className='hover:scale-y-110 transition-all flex flex-col items-center justify-start cursor-pointer w-24 md:w-auto '>
                        <img src={slide.imgSrc} className='w-10 h-10' alt='' />
                        <p className='text-[12px] text-center font-normal line-clamp-2 py-2 md:text-sm'>
                            {slide.descr}
                        </p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default MainCatalog;
