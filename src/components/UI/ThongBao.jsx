import React from "react";

const ThongBao = () => {
    return (
        <div className='absolute z-50  bg-white -bottom-0 right-0  translate-y-full opacity-0  transition-all group-hover:opacity-100 w-0 group-hover:w-96 h-0 group-hover:h-80 rounded-sm'>
            <div className='no-signin flex flex-col w-full h-full justify-between relative'>
                <div className='absolute right-8 top-0 -translate-y-full   w-0 h-0 border-8  border-t-0 border-transparent border-b-white'></div>
                <div className='flex flex-col items-center flex-auto justify-center'>
                    <img
                        src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/99e561e3944805a023e87a81d4869600.png'
                        alt=''
                        className='w-1/2 h-1/2 '
                    />
                    <div>Đăng nhập để xem Thông báo</div>
                </div>
                <div className='cta-btn flex justify-between bg-gray-100 '>
                    <a
                        href='#'
                        className='text-gray-700 text-center  py-1 w-1/2 transition-all hover:bg-orange-600 hover:text-white'>
                        Đăng nhập
                    </a>
                    <a
                        href='#'
                        className='text-gray-700 text-center py-1 w-1/2 transition-all hover:bg-orange-600 hover:text-white'>
                        Đăng ký
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ThongBao;
