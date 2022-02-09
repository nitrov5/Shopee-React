import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

import CircleNext from "../UI/CircleNext";
import CirclePrev from "../UI/CirclePrev";
import { v4 as uuid } from "uuid";

const Catalog = () => {
    const DUMMY_CATALOG = [
        {
            aSrc: "#",
            imgSrc: "./images/categories/1.png",
            descr: "Thời Trang Nam",
        },
        {
            aSrc: "#",
            imgSrc: "./images/categories/2.png",
            descr: "Điện Thoại & Phụ Kiện",
        },
        { aSrc: "#", imgSrc: "./images/categories/3.png", descr: "Thiết Bị Điện Tử" },
        { aSrc: "#", imgSrc: "./images/categories/4.png", descr: "Máy Tính & Laptop" },
        {
            aSrc: "#",
            imgSrc: "./images/categories/5.png",
            descr: "Máy Ảnh & Máy Quay Lorem ipsum ",
        },
        { aSrc: "#", imgSrc: "./images/categories/6.png", descr: "Đồng Hồ" },
        { aSrc: "#", imgSrc: "./images/categories/7.png", descr: "Giày Dép Nam" },
        { aSrc: "#", imgSrc: "./images/categories/8.png", descr: "Thiết Bị Điện Gia Dụng" },
        { aSrc: "#", imgSrc: "./images/categories/9.png", descr: "Thể Thao & Du Lịch" },
        { aSrc: "#", imgSrc: "./images/categories/10.png", descr: "Ô Tô & Xe Máy & Xe Đạp" },
        { aSrc: "#", imgSrc: "./images/categories/11.png", descr: "Balo & Túi Ví Nam" },
        { aSrc: "#", imgSrc: "./images/categories/12.png", descr: "Đồ Chơi" },
        { aSrc: "#", imgSrc: "./images/categories/13.png", descr: "Chăm Sóc Thú Cưng" },
        { aSrc: "#", imgSrc: "./images/categories/14.png", descr: "Thời Trang Nữ" },
        { aSrc: "#", imgSrc: "./images/categories/15.png", descr: "Mẹ & Bé" },
        { aSrc: "#", imgSrc: "./images/categories/16.png", descr: "Nhà Cửa & Đời Sống" },
        { aSrc: "#", imgSrc: "./images/categories/17.png", descr: "Sắc Đẹp" },
        { aSrc: "#", imgSrc: "./images/categories/18.png", descr: "Sức Khỏe" },
        { aSrc: "#", imgSrc: "./images/categories/19.png", descr: "Giày Dép Nữ" },
        { aSrc: "#", imgSrc: "./images/categories/20.png", descr: "Túi Ví Nữ" },
        { aSrc: "#", imgSrc: "./images/categories/21.png", descr: "Phụ Kiện & Trang Sức Nữ" },
        { aSrc: "#", imgSrc: "./images/categories/22.png", descr: "Bách Hóa Online" },
        { aSrc: "#", imgSrc: "./images/categories/23.png", descr: "Nhà Sách Online" },
        { aSrc: "#", imgSrc: "./images/categories/24.png", descr: "Thời Trang Trẻ Em" },
        { aSrc: "#", imgSrc: "./images/categories/25.png", descr: "Giặt Giũ & Chăm Sóc Sắc Đẹp" },
        { aSrc: "#", imgSrc: "./images/categories/26.png", descr: "Voucher & Dịch Vụ" },
    ];

    return (
        <div className='bg-white category flex  flex-col   xl:mx-40   shadow   rounded-sm '>
            <div className='  p-5 flex items-center justify-between     '>
                <p className='uppercase text-gray-500 font-normal text-lg '>Danh mục</p>
                <a href='#' className='flex lg:hidden items-center font-thin text-red-600 text-xs'>
                    Xem thêm
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4'
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
                </a>
            </div>

            <div className='group relative catalog-container'>
                <Swiper
                    modules={[Navigation, Grid]}
                    slidesPerView={10}
                    slidesPerGroup={10}
                    spaceBetween={0}
                    grid={{ rows: 2, fill: "row" }}
                    navigation={{
                        nextEl: ".catalog-next",
                        prevEl: ".catalog-prev",
                    }}
                    className='catalog-swiper '>
                    {DUMMY_CATALOG.map((item) => (
                        <SwiperSlide
                            key={uuid()}
                            className=' hover:shadow-md  border border-gray-200/80 text-sm text-gray-400   h-auto'>
                            <a href={item.aSrc} className='h-36 w-full  flex flex-col items-center '>
                                <img
                                    src={item.imgSrc}
                                    alt={item.descr}
                                    className='p-4 h-2/3  object-cover  '
                                />
                                <p className=' px-2 line-clamp-2  text-center  text-gray-800 '>
                                    {item.descr}
                                </p>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <CircleNext customClass={"catalog-next"} />

                <CirclePrev customClass={"catalog-prev"} />
            </div>
        </div>
    );
};

export default Catalog;
