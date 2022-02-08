import React from 'react'

const Header = () => {
    return (
       <header className="lg:bg-orange-600 lg:py-2 xl:px-40 lg:sticky  w-full">   
            {/* Nav mobile  */}
            <nav className="h-10 absolute flex lg:hidden z-50 top-0 left-0 right-0 p-2 items-center   gap-2">
                <div className="search flex items-center justify-center w-2/3 bg-white rounded px-2 ml-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input type="text" className="rounded pl-2 placeholder:text-red-400 w-full h-full text-xs" placeholder="GIẢM GIÁ ĐẾN 90%" />
                </div>
                <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-zinc-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>
                </div>
                <div className="user">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-zinc-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                    </svg>
                </div>
            </nav>
          
           {/* Nav desktop */}
            <nav className="laptop-nav hidden lg:flex justify-between items-center text-[13px] py-2 text-white">
                <div className="left flex items-center gap-2">
                    <a href="#" className="transition-all hover:opacity-60 flex gap-2 items-center after:content-['|'] after:h-full after:text-gray-200"
                        >Kênh Người Bán</a
                    >
                    <a href="#" className="transition-all hover:opacity-60 flex gap-2 items-center after:content-['|'] after:h-full after:text-gray-200"
                        >Trở thành Người bán Shopee</a
                    >
                    <a href="#" className="transition-all hover:opacity-60 flex gap-2 items-center after:content-['|'] after:text-gray-200"
                        >Tải ứng dụng</a
                    >
                    <div href="#" className="transition-all hover:opacity-60">
                        <span>Kết nối</span>
                        <a href="#" className="transition-all hover:opacity-60"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="transition-all hover:opacity-60"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="right flex items-center gap-2">
                    <a href="#" className="transition-all hover:opacity-60 flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                        </svg>
                        <span>Thông báo</span>
                    </a>
                    <a href="#" className="transition-all hover:opacity-60 flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>Hỗ trợ</span>
                    </a>
                    <a href="#" className="transition-all hover:opacity-60 flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                            />
                        </svg>
                        <span>Tiếng Việt</span>
                    </a>
                    <a href="#" className="transition-all hover:opacity-60 flex items-center gap-2 after:content-['|'] after:text-gray-200"> Đăng Ký </a>
                    <a href="#" className="transition-all hover:opacity-60">Đăng Nhập</a>
                </div>
            </nav>
           

           
            <div className="second hidden md:flex justify-between items-center text-white h-20">
                <div className="logo h-full flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <h1 className="text-3xl">Shopee</h1>
                </div>
                <div className="search flex flex-col items-center flex-1 mx-10 bg-white text-gray-800 relative rounded">
                    <input type="text" placeholder="Book Club Săn Quà Chính Hãng" className="p-2 px-4 w-full border-none focus:outline-0 rounded" />
                    <button
                        aria-label="search"
                        className="
                            cursor-pointer
                            rounded
                            w-14
                            h-7
                            text-white
                            p-4
                            font-bold
                            bg-red-500
                            absolute
                            top-1/2
                            right-[2px]
                            -translate-y-1/2
                            flex
                            items-center
                            justify-center
                        "
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 font-bold" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    <nav className="flex items-center gap-3 absolute -bottom-1/2 text-gray-100 text-[13px] self-start">
                        <a href="#" className="whitespace-nowrap">Tất</a>
                        <a href="#" className="whitespace-nowrap">Sữa Rửa Mặt</a>
                        <a href="#" className="whitespace-nowrap">Mặt Nạ</a>
                        <a href="#" className="whitespace-nowrap">Set Đồ Nữ</a>
                        <a href="#" className="whitespace-nowrap">Vòng Tay</a>
                        <a href="#" className="whitespace-nowrap">Balo</a>
                        <a href="#" className="whitespace-nowrap">Nồi Chiên Không Dầu</a>
                        <a href="#" className="whitespace-nowrap">Sweater</a>
                    </nav>
                </div>
                <div className="cursor-pointer relative group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>
                    <div className="cart bg-white w-96 h-96 absolute z-50 right-0 hidden group-hover:flex">
                        <h3 className="text-sky-700">Chưa có sản phẩm</h3>
                    </div>
                </div>
            </div>
             
        </header>
    )
}

export default Header