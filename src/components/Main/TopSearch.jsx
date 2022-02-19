import {Swiper, SwiperSlide}  from 'swiper/react';
import { Navigation } from 'swiper';
import {v4 as uuid} from 'uuid';
import 'swiper/css';
import DefaultTitle from '../UI/DefaultTitle';
import CircleNext from '../UI/CircleNext';
import CirclePrev from '../UI/CirclePrev';

const TopSearch = () => {
    const TopSearchList = [
        {
            href: "#",
            imgSrc: "./images/top_search/1.jpeg",
            description: "Kẹp Tóc Càng Cua Đơn Giản Kẹp Tóc Càng Cua Đơn Giản ",
            totalSold: "Đã bán 62K+",
            logoSrc: "./images/top_search/logo.png",
        },
        {
            href: "#",
            imgSrc: "./images/top_search/4.jpeg",
            description: "Ốp Lưng Iphone",
            totalSold: "Đã bán 229k+",
            logoSrc: "./images/top_search/logo.png",
        },
        {
            href: "#",
            imgSrc: "./images/top_search/3.jpeg",
            description: "Bông Tẩy Trang 3 lớp Cotton",
            totalSold: "Đã bán 128k+",
            logoSrc: "./images/top_search/logo.png",
        },
        {
            href: "#",
            imgSrc: "./images/top_search/2.jpeg",
            description: "Quần Lót Nữ Cotton",
            totalSold: "Đã bán 81k+",
            logoSrc: "./images/top_search/logo.png",
        },
        {
            href: "#",
            imgSrc: "./images/top_search/1.jpeg",
            description: "Kẹp Tóc Càng Cua Đơn Giản Kẹp Tóc Càng Cua Đơn Giản ",
            totalSold: "Đã bán 62K+",
            logoSrc: "./images/top_search/logo.png",
        },
        {
            href: "#",
            imgSrc: "./images/top_search/4.jpeg",
            description: "Ốp Lưng Iphone",
            totalSold: "Đã bán 229k+",
            logoSrc: "./images/top_search/logo.png",
        },
        {
            href: "#",
            imgSrc: "./images/top_search/3.jpeg",
            description: "Bông Tẩy Trang 3 lớp Cotton",
            totalSold: "Đã bán 128k+",
            logoSrc: "./images/top_search/logo.png",
        },
        {
            href: "#",
            imgSrc: "./images/top_search/2.jpeg",
            description: "Quần Lót Nữ Cotton",
            totalSold: "Đã bán 81k+",
            logoSrc: "./images/top_search/logo.png",
        },
        {
            href: "#",
            imgSrc: "./images/top_search/1.jpeg",
            description: "Kẹp Tóc Càng Cua Đơn Giản Kẹp Tóc Càng Cua Đơn Giản ",
            totalSold: "Đã bán 62K+",
            logoSrc: "./images/top_search/logo.png",
        },
        {
            href: "#",
            imgSrc: "./images/top_search/4.jpeg",
            description: "Ốp Lưng Iphone",
            totalSold: "Đã bán 229k+",
            logoSrc: "./images/top_search/logo.png",
        },
        {
            href: "#",
            imgSrc: "./images/top_search/3.jpeg",
            description: "Bông Tẩy Trang 3 lớp Cotton",
            totalSold: "Đã bán 128k+",
            logoSrc: "./images/top_search/logo.png",
        },
        {
            href: "#",
            imgSrc: "./images/top_search/2.jpeg",
            description: "Quần Lót Nữ Cotton",
            totalSold: "Đã bán 81k+",
            logoSrc: "./images/top_search/logo.png",
        } 
    ];
  return (
      <>
          {/* Mobile */}
          <section className='top-search relative flex lg:hidden flex-col space-y-2   mb-1 bg-white xl:mx-40'>
              <DefaultTitle
                  titleMobile={"Tìm kiếm hàng đầu"}
                  titleDesktop={"Tìm kiếm hàng đầu"}
                  viewMore={"#"}
              />

              <div className='top-search-container group   overflow-x-hidden'>
                  <Swiper
                      slidesPerView={2.3}
                      slidesPerGroup={2}
                      spaceBetween={8}
                      modules={[Navigation]}
                      navigation={{
                          nextEl: ".topSearch-next",
                          prevEl: ".topSearch-prev",
                      }}
                      breakpoints={{
                          768: {
                              slidesPerView: 5.2,
                              slidesPerGroup: 5,
                          },
                          1024: {
                              slidesPerView: 6,
                              slidesPerGroup: 6,
                          },
                      }}
                      className='h-48 w-full flex  items-center  px-2.5  '>
                      {TopSearchList.map((item) => (
                          <SwiperSlide key={uuid()} className=' border md:border-0 h-full  '>
                              <a
                                  href={item.href}
                                  className='h-full w-full relative flex flex-col  justify-center '>
                                  <img src={item.imgSrc} className='w-full object-cover h-3/5' />
                                  <div className='px-2 py-1 md:py-2 description flex flex-col justify-between h-2/5 bg-gray-50 lg:bg-white relative   '>
                                      <p className=' line-clamp-2 text-sm  '>{item.description}</p>
                                      <p
                                          className='                                            
                                            text-gray-500
                                            md:bg-slate-700/30 md:text-white md:absolute   md:top-0 md:left-0 md:-translate-y-full
                                             md:text-center
                                            text-xs
                                            md:text-sm
                                            w-full                                         
                                        '>
                                          {item.totalSold}
                                      </p>
                                  </div>
                                  <img
                                      src={item.logoSrc}
                                      className='absolute top-0 left-0 w-6 h-8 md:w-8 md:h-10'
                                      alt=''
                                  />
                              </a>
                          </SwiperSlide>
                      ))}
                      <a href='#' className='flex justify-center flex-col md:hidden swiper-slide '>
                          <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-10 w-10   text-red-500'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'>
                              <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  strokeWidth='1'
                                  d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
                              />
                          </svg>
                          <p className='shopee-mall-promotion capitalize text-red-500 font-semibold whitespace-nowrap'>
                              Xem thêm
                          </p>
                      </a>
                  </Swiper>
                  <CircleNext customClass={"topSearch-next"} />
                  <CirclePrev customClass={"topSearch-prev"} />
              </div>
          </section>

          {/* Desktop */}
          <section className='top-search relative hidden lg:flex flex-col space-y-2 p-2 mb-1 bg-white xl:mx-40'>
              <DefaultTitle
                  titleMobile={"Tìm kiếm hàng đầu"}
                  titleDesktop={"Tìm kiếm hàng đầu"}
                  viewMore={"#"}
              />

              <div className='top-search-container group   overflow-x-hidden  '>
                  <Swiper
                      slidesPerView={6}
                      slidesPerGroup={6}
                      spaceBetween={10}
                      modules={[Navigation]}
                      navigation={{
                          nextEl: ".topSearch-next",
                          prevEl: ".topSearch-prev",
                      }}
                      className='  '>
                      {TopSearchList.map((item) => (
                          <SwiperSlide key={uuid()} className=' border md:border-0  '>
                              <a
                                  href={item.href}
                                  className='h-full relative flex flex-col justify-center'>
                                  <img src={item.imgSrc} className='w-full object-cover h-2/3' />
                                  <div className='description h-1/3 relative py-2 '>
                                      <p className='line-clamp-2 text-sm '>{item.description}</p>
                                      <p
                                          className='
                                            text-gray-500
                                            md:bg-gray-800/20 md:text-white md:absolute   md:top-0 md:-translate-y-full md:text-center
                                            text-xs
                                            md:text-sm
                                            w-full
                                            h-6
                                            md:flex md:flex-col md:justify-center
                                        '>
                                          {item.totalSold}
                                      </p>
                                  </div>
                                  <img
                                      src={item.logoSrc}
                                      className='absolute top-0 left-0 w-6 h-8'
                                      alt=''
                                  />
                              </a>
                          </SwiperSlide>
                      ))}
                      <a href='#' className='flex justify-center flex-col md:hidden swiper-slide '>
                          <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-10 w-10 text-red-500'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'>
                              <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  strokeWidth='1'
                                  d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
                              />
                          </svg>
                          <p className='shopee-mall-promotion capitalize text-red-500 font-semibold whitespace-nowrap'>
                              Xem thêm
                          </p>
                      </a>
                  </Swiper>
                  <CircleNext customClass={"topSearch-next"} />
                  <CirclePrev customClass={"topSearch-prev"} />
              </div>
          </section>
      </>
  );
}

export default TopSearch