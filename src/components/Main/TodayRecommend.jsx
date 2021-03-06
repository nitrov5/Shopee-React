import React from "react";
import { v4 as uuid } from "uuid";
import DefaultTitle from "../UI/DefaultTitle";

const TodayRecommend = () => {
    const ProductList = [
        {
            imgSrc: "./images/today_suggest/1.jpeg",
            salePercent: "50%",
            description:
                "Áo thun tay lỡ PHG AD67, Áo phông tay lỡ unisex Form rộngÁo phông tay lỡ unisex Form rộng",
            catalogProduct: "./images/today_suggest/2_1.png",
            tagProduct: "Yêu thích",
            price: 1000,
            totalSold: 300,
        },
        {
            imgSrc: "./images/today_suggest/3.jpeg",
            salePercent: "20%",
            imgTagSrc: "./images/today_suggest/2_1.png ",
            description: "",
            price: 1234,
            totalSold: 123,
        },
        {
            imgSrc: "./images/today_suggest/1.jpeg",
            salePercent: "50%",
            description:
                "  Áo sweater nam nữ Sunshine phong cách, Áo nỉ bông Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,                                atque!",
            price: 17000,
            totalSold: 5.6,
        },
        {
            imgSrc: "./images/today_suggest/2.jpeg",
            salePercent: "49%",
            description: " RED DRESS Bộ sưu tập váy đỏ Đầm Lorem ipsum dolor sit amet.",
            price: 128000,
            totalSold: 21,
        },
        {
            imgSrc: "./images/today_suggest/1.jpeg",
            salePercent: "50%",
            description:
                "Áo thun tay lỡ PHG AD67, Áo phông tay lỡ unisex Form rộngÁo phông tay lỡ unisex Form rộng",
            catalogProduct: "./images/today_suggest/2_1.png",
            tagProduct: "Yêu thích",
            price: 1000,
            totalSold: 300,
        },
        {
            imgSrc: "./images/today_suggest/3.jpeg",
            salePercent: "20%",
            imgTagSrc: "./images/today_suggest/2_1.png ",
            description: "",
            price: 1234,
            totalSold: 123,
        },
        {
            imgSrc: "./images/today_suggest/1.jpeg",
            salePercent: "50%",
            description:
                "  Áo sweater nam nữ Sunshine phong cách, Áo nỉ bông Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,                                atque!",
            price: 17000,
            totalSold: 5.6,
        },
        {
            imgSrc: "./images/today_suggest/2.jpeg",
            salePercent: "49%",
            description: " RED DRESS Bộ sưu tập váy đỏ Đầm Lorem ipsum dolor sit amet.",
            price: 128000,
            totalSold: 21,
        },
        {
            imgSrc: "./images/today_suggest/1.jpeg",
            salePercent: "50%",
            description:
                "Áo thun tay lỡ PHG AD67, Áo phông tay lỡ unisex Form rộngÁo phông tay lỡ unisex Form rộng",
            catalogProduct: "./images/today_suggest/2_1.png",
            tagProduct: "Yêu thích",
            price: 1000,
            totalSold: 300,
        },
        {
            imgSrc: "./images/today_suggest/2.jpeg",
            salePercent: "49%",
            description: " RED DRESS Bộ sưu tập váy đỏ Đầm Lorem ipsum dolor sit amet.",
            price: 128000,
            totalSold: 21,
        },
        {
            imgSrc: "./images/today_suggest/1.jpeg",
            salePercent: "50%",
            description:
                "Áo thun tay lỡ PHG AD67, Áo phông tay lỡ unisex Form rộngÁo phông tay lỡ unisex Form rộng",
            catalogProduct: "./images/today_suggest/2_1.png",
            tagProduct: "Yêu thích",
            price: 1000,
            totalSold: 300,
        },
        {
            imgSrc: "./images/today_suggest/3.jpeg",
            salePercent: "20%",
            imgTagSrc: "./images/today_suggest/2_1.png ",
            description: "",
            price: 1234,
            totalSold: 123,
        },
        {
            imgSrc: "./images/today_suggest/1.jpeg",
            salePercent: "50%",
            description:
                "  Áo sweater nam nữ Sunshine phong cách, Áo nỉ bông Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,                                atque!",
            price: 17000,
            totalSold: 5.6,
        },
        {
            imgSrc: "./images/today_suggest/2.jpeg",
            salePercent: "49%",
            description: " RED DRESS Bộ sưu tập váy đỏ Đầm Lorem ipsum dolor sit amet.",
            price: 128000,
            totalSold: 21,
        },
        {
            imgSrc: "./images/today_suggest/1.jpeg",
            salePercent: "50%",
            description:
                "Áo thun tay lỡ PHG AD67, Áo phông tay lỡ unisex Form rộngÁo phông tay lỡ unisex Form rộng",
            catalogProduct: "./images/today_suggest/2_1.png",
            tagProduct: "Yêu thích",
            price: 1000,
            totalSold: 300,
        },
        {
            imgSrc: "./images/today_suggest/3.jpeg",
            salePercent: "20%",
            imgTagSrc: "./images/today_suggest/2_1.png ",
            description: "",
            price: 1234,
            totalSold: 123,
        },
        {
            imgSrc: "./images/today_suggest/1.jpeg",
            salePercent: "50%",
            description:
                "  Áo sweater nam nữ Sunshine phong cách, Áo nỉ bông Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,                                atque!",
            price: 17000,
            totalSold: 5.6,
        },
        {
            imgSrc: "./images/today_suggest/2.jpeg",
            salePercent: "49%",
            description: " RED DRESS Bộ sưu tập váy đỏ Đầm Lorem ipsum dolor sit amet.",
            price: 128000,
            totalSold: 21,
        },
    ];

    return (
        <div className='today-suggest flex flex-col  mb-1   space-y-2 pb-16 xl:px-40'>
            <DefaultTitle
                titleMobile={"Gợi Ý Hôm Nay"}
                titleDesktop={"Gợi Ý Hôm Nay"}
                sticky='sticky  top-0 lg:top-32  md:z-[15] transition-all  h-14'
            />

            <div className='suggest-products grid grid-cols-2 px-2 justify-items-center gap-2 md:grid-cols-4 md:gap-2.5 lg:grid-cols-6 '>
                {ProductList.map((product) => (
                    <a
                        key={uuid()}
                        href='#'
                        className='  shadow-md hover:border hover:-translate-y-1 hover:z-10 hover:border-orange-600 group relative flex flex-col rounded-sm bg-white'>
                        <div className='suggest-product-header relative h-2/3'>
                            <img src={product.imgSrc} alt='' className=' w-full object-cover' />

                            {product.tagProduct && <span className='absolute top-2 px-2 -left-1 z-10 rounded-l-none rounded-sm text-gray-100  bg-orange-500 text-center'>
                                <span className='  w-full after:absolute after:bottom-0 after:left-0  after:border-[4px]  after:-translate-x-1/2 after:translate-y-full after:border-t-0 after:border-transparent after:border-r-orange-600'>
                                    {product.tagProduct}
                                </span>
                            </span>  
                            }
                            <img
                                src={product.imgTagSrc}
                                alt=''
                                className='absolute bottom-0 left-0 z-10'
                            />
                        </div>
                        <div className='suggest-product-content  mt-auto flex flex-col p-2 gap-3 pb-3'>
                            <p className='description text-gray-600 text-xs line-clamp-2'>
                                {product.description}
                            </p>
                            <div className='flex justify-between '>
                                <span className='text-red-600 text-md'>{product.price}</span>
                                <span className='text-gray-500 text-xs'>
                                    Đã bán {product.totalSold}
                                </span>
                            </div>
                        </div>

                        <div className='find-similar-product text-white bg-orange-600 text-center absolute bottom-0 w-full rounded-sm z-30 translate-y-full group-hover:block hidden p-1 py-1.5   transition-all'>
                            
                            Tìm sản phẩm tương tự
                        </div>
                    </a>
                ))}
            </div>
            <button
                className='
                        w-11/12 mx-auto 
                        md:block md:w-1/3
                        hover:bg-orange-600
                        md:border-0
                        hover:text-white
                        h-8
                        border-[1.5px]
                        rounded
                        border-red-500
                        bg-white
                        text-center text-red-500
                        md:text-gray-800
                    '>
                Xem thêm 123
            </button>
        </div>
    );
};

export default TodayRecommend;
