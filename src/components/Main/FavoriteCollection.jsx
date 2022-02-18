import { Swiper, SwiperSlide } from "swiper/react";
import DefaultTitle from "../UI/DefaultTitle";
import { v4 as uuid } from "uuid";

import "swiper/css";

const FavoriteCollection = () => {
    const Collections = [
        {
            imgSrc1: "./images/favorites/1.jpeg",
            imgSrc2: "./images/favorites/1_2.jpeg",
            imgSrc3: "./images/favorites/1_3.jpeg",
            description: " Điểm nhấn trang trí cho tường",
            totalSale: "5tr+",
        },
        {
            imgSrc1: "./images/favorites/2.jpeg",
            imgSrc2: "./images/favorites/2_2.jpeg",
            imgSrc3: "./images/favorites/2_3.jpeg",
            description: "Biến Hóa Phong Cách ",
            totalSale: "908k+",
        },

        {
            imgSrc1: "./images/favorites/3.jpeg",
            imgSrc2: "./images/favorites/3_2.jpeg",
            imgSrc3: "./images/favorites/3_3.jpeg",
            description: " Ốp lưng giá chất",
            totalSale: "3tr+ ",
        },
        {
            imgSrc1: "./images/favorites/1.jpeg",
            imgSrc2: "./images/favorites/1_2.jpeg",
            imgSrc3: "./images/favorites/1_3.jpeg",
            description: " Điểm nhấn trang trí cho tường",
            totalSale: "5tr+",
        },
        {
            imgSrc1: "./images/favorites/2.jpeg",
            imgSrc2: "./images/favorites/2_2.jpeg",
            imgSrc3: "./images/favorites/2_3.jpeg",
            description: "Biến Hóa Phong Cách ",
            totalSale: "908k+",
        },

        {
            imgSrc1: "./images/favorites/3.jpeg",
            imgSrc2: "./images/favorites/3_2.jpeg",
            imgSrc3: "./images/favorites/3_3.jpeg",
            description: " Ốp lưng giá chất",
            totalSale: "3tr+ ",
        },
    ];

    return (
        <div className='favorites-gallery  lg:hidden flex flex-col bg-white xl:mx-40'>
            <DefaultTitle titleMobile={"Bộ Sưu Tập Yêu Thích"} customCss='px-2.5 py-2 ' /> 
           

            <div className='favorities-list h-60   '>
                <Swiper slidesPerView={1.5} slidesPerGroup={1} spaceBetween={7} className='h-full pb-2.5  px-3.5 '>
                    {Collections.map((item) => (
                        <SwiperSlide
                            key={uuid()}
                            tag={'a'}
                            className='h-full flex flex-col gap-1 border rounded-sm'>
                            <div className='flex items-center w-full h-full gap-1 p-1'>
                                <div className='w-2/3 h-full'>
                                    <img
                                        src={item.imgSrc1}
                                        alt={item.description}
                                        className=' w-full h-full'
                                    />
                                </div>

                                <div className='flex flex-col gap-1 w-1/3 h-full items-center'>
                                    <img src={item.imgSrc2} alt={item.imgSrc2} />
                                    <img src={item.imgSrc3} alt={item.imgSrc3} />
                                </div>
                            </div>
                            <div className='bg-gray-100 px-3 py-2 w-full'>
                                <p className='truncate text-black'>{item.description}</p>
                                <p className='text-gray-500 text-xs'>
                                    <span>Đã bán</span> <span>{item.totalSale}</span>
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default FavoriteCollection;
