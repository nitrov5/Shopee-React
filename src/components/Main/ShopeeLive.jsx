import {Swiper, SwiperSlide } from "swiper/react"
import { v4 as uuid } from 'uuid';

import 'swiper/css';

const ShopeeLive = () => {
    const itemsLive = [
        {
            imgSrc: './images/shopee_live/1.jpeg ',
            numberOfLive: 34,
            description: '  Deals 1K vào Thứ 3 Nhận Lorem ipsum dolor sit amet.'
        },
        {
            imgSrc: './images/shopee_live/2.jpeg',
            numberOfLive: 234 ,
            description: 'Siêu xu - săn sa le linh đinh'
        },
        {
            imgSrc: './images/shopee_live/3.jpeg',
            numberOfLive: 65,
            description: 'Deals 1K vào Thứ 3 Nhận Lorem ipsum dolor sit amet.'
        },
       
        {
            imgSrc: './images/shopee_live/1.jpeg ',
            numberOfLive: 34,
            description: '  Deals 1K vào Thứ 3 Nhận Lorem ipsum dolor sit amet.'
        },
        {
            imgSrc: './images/shopee_live/2.jpeg',
            numberOfLive: 234 ,
            description: 'Siêu xu - săn sa le linh đinh'
        },
        {
            imgSrc: './images/shopee_live/3.jpeg',
            numberOfLive: 65,
            description: 'Deals 1K vào Thứ 3 Nhận Lorem ipsum dolor sit amet.'
        },
       
        {
            imgSrc: './images/shopee_live/1.jpeg ',
            numberOfLive: 34,
            description: '  Deals 1K vào Thứ 3 Nhận Lorem ipsum dolor sit amet.'
        },
        {
            imgSrc: './images/shopee_live/2.jpeg',
            numberOfLive: 234 ,
            description: 'Siêu xu - săn sa le linh đinh'
        },
        {
            imgSrc: './images/shopee_live/3.jpeg',
            numberOfLive: 65,
            description: 'Deals 1K vào Thứ 3 Nhận Lorem ipsum dolor sit amet.'
        },
       
    ];
  return (
      <section className='shopee-live lg:hidden flex flex-col space-y-2 p-2 mb-1 bg-white xl:mx-40 relative'>
          <div className='shopee-live-header flex items-center justify-between'>
              <p className='uppercase text-red-500 font-semibold'>Shopee Live</p>
              <a href='#' className='flex items-center font-thin text-gray-600 text-xs'>
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

          <div className='shopee-live-list h-48 group '>
              <Swiper
                  slidesPerView={2.4}
                  slidesPerGroup={2}
                  spaceBetween={8}
                  className='h-full w-full  '>
                  {itemsLive.map((itemLive) => (
                      <SwiperSlide key={uuid()} tag={"a"} className="relative ">
                          <img
                              src={itemLive.imgSrc}
                              alt={itemLive.description}
                              className='w-full h-full object-cover'
                          />
                          <div className='overlay absolute top-0 left-0 right-0 bottom-0 bg-black/30'></div>
                          <div className='flex items-center absolute top-2 left-2 h-4'>
                              <div className='bg-red-500 flex items-center h-full px-1 w-12 gap-1 text-white'>
                                  <div className='w-2 h-2 rounded-full font-extralight bg-white'></div>
                                  <span className='uppercase text-xs font-bold'>Live</span>
                              </div>
                              <div className='text-white bg-black h-full w-12 px-1 flex items-center gap-1'>
                                  <svg width='13px' height='9px' viewBox='0 0 13 9' className='T_3LfX'>
                                      <g
                                          transform='translate(1, 1)'
                                          stroke='none'
                                          strokeWidth='1'
                                          fill='currentColor'
                                          fillRule='evenodd'>
                                          <path
                                              d='M10.9548861,3.33163064 C11.0697662,3.56943582 10.9576811,3.84970069 10.704537,3.95761976 C10.4513929,4.06553882 10.1530504,3.96024532 10.0381703,3.72244014 C9.22807679,2.0455222 7.44671862,0.945697445 5.45198834,0.945697445 C3.52980653,0.945697445 1.80217624,1.96662743 0.953048342,3.5511236 C0.828046664,3.7843802 0.525424148,3.87827833 0.277122036,3.76085095 C0.0288199241,3.64342357 -0.0711348266,3.35913804 0.0538668519,3.12588145 C1.07240342,1.225264 3.14581025,0 5.45198834,0 C7.84532508,0 9.98301409,1.31982627 10.9548861,3.33163064 Z'
                                              stroke='currentColor'
                                              strokeWidth='0.1'
                                              fillRule='nonzero'></path>
                                          <path d='M3.05000906,5 L5.42857143,5 L5.42857143,3.00100078 C5.45229973,3.00033507 5.47611073,3 5.5,3 C6.88071187,3 8,4.11928813 8,5.5 C8,6.88071187 6.88071187,8 5.5,8 C4.11928813,8 3,6.88071187 3,5.5 C3,5.32876708 3.01721513,5.16155497 3.05000906,5 Z'></path>
                                      </g>
                                  </svg>
                                  <span className='number-live text-xs'>{itemLive.numberOfLive}</span>
                              </div>
                          </div>

                          <p className='capitilize line-clamp-2 absolute px-2 bottom-2 font-semibold text-white shadow-md text-[13px]'>
                              {itemLive.description}
                          </p>
                      </SwiperSlide>
                  ))}
              </Swiper>
          </div>
      </section>
  );
}

export default ShopeeLive