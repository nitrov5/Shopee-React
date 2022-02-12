import React from "react";
import GotoUp from "./UI/GotoUp";

const MobileFooter = () => {
    return (
        <div className='end flex flex-col md:hidden items-center justify-between pt-0 p-2 md:px-40 '>
            <div className=' grid grid-cols-2 gap-6 w-full py-8 items-center border-b border-b-gray-200'>
                <a
                    href='#'
                    className=' uppercase whitespace-nowrap text-gray-500 text-xs px-4 border-r'>
                    Chính Sách bảo mật
                </a>
                <a
                    href='#'
                    className='uppercase whitespace-nowrap text-gray-500 text-xs px-4 border-r'>
                    Quy Chế hoạt động
                </a>
                <a
                    href='#'
                    className='uppercase whitespace-nowrap text-gray-500 text-xs px-4 border-r'>
                    Chính sách vận chuyển
                </a>
                <a href='#' className='uppercase  text-center line-clamp-2 text-gray-500 text-xs px-4  '>
                    Chính sách trả hàng và hoàn tiền
                </a>
            </div>

            <div className='   flex flex-wrap  items-center justify-center       mt-4'>
                <div className='h-full flex  justify-center w-1/2 p-2'>
                    <img src='./images/footer/5.png' alt='' className=' ' />
                </div>
                <div className='h-full flex   justify-center w-1/2 p-2'>
                    <img src='./images/footer/5.png' alt='' className=' ' />
                </div>
                <div className=' h-full flex  justify-center w-1/2 p-2'>
                    <img src='./images/footer/6.png' alt='' className='' />
                </div>
            </div>

            <div className='sm:hidden text-xs text-center  text-gray-800 text-least space-y-1'>
                <p className='mb-2 '>Công ty TNHH Shopee</p>
                <p>
                    Địa chỉ: Tầng 28, Tòa nhà trung tâm Lotte Hà Nội, 54 Liễu Giai, phường Cống Vị,
                    Quận Ba Đình, Hà Nội
                </p>
                <p>Tổng đài hỗ trợ: 19001221 - Email: support@shopee.vn</p>
                <p>
                    Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư Hà Nội cấp lần đầu ngày
                    10/02/2015
                </p>
                <p>&copy; 2015 - Bản quyền thuộc về Công ty TNHH Shopee</p>
            </div>

            <div className='sm:block hidden mt-2 text-center text-gray-800 text-xs space-y-2'>
                <p className='mb-6'>Công ty TNHH Shopee</p>
                <p>
                    Địa chỉ: Tầng 4-5-6, Tòa nhà trung tâm Lotte Hà Nội, số 29 Liễu Giai, phường
                    Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam Tổng đài hỗ trợ: 19001221 -
                    Email: support@shopee.vn
                </p>
                <p>
                    Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024
                    73081221 (ext 4678)
                </p>
                <p>
                    Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư Hà Nội cấp lần đầu ngày
                    10/02/2015
                </p>
                <p>&copy; 2015 - Bản quyền thuộc về Công ty TNHH Shopee</p>
            </div>

            
                <GotoUp />
            
        </div>
    );
};
export default MobileFooter;
