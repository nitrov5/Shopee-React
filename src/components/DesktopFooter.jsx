import React from "react";
import GotoUp from "./UI/GotoUp";

const DesktopFooter = () => {
    return (
        <footer className=' hidden md:block  footer   mx-auto   '>
            <div className='border-t-4 border-t-red-600 border-b-1 bg-white flex items-center justify-between p-6   px-14 xl:px-36 '>
                <div className='flex items-center w-full gap-4'>
                    <div className='text-red-600 flex flex-col justify-center w-12 h-12'>
                        <img
                            src='./images/product/return.png'
                            alt=''
                            className='object-cover w-full h-full'
                        />
                    </div>
                    <div className='text-gray-600 flex flex-col'>
                        <span>7 ngày miễn phí trả hàng</span>
                        <span>Trả hàng miễn phí trong 7 ngày</span>
                    </div>
                </div>
                <div className='flex items-center w-full gap-4'>
                    <div className='text-red-600 flex flex-col justify-center w-12 h-12'>
                        <img
                            src='./images/product/shipping.png'
                            alt=''
                            className='object-cover w-full h-full'
                        />
                    </div>
                    <div className='text-gray-600 flex flex-col'>
                        <span>Hàng chính hãng 100%</span>
                        <span>Đảm bảo hàng chính hãng hoặc hoàn tiền gấp đôi</span>
                    </div>
                </div>

                <div className='flex items-center w-full gap-4'>
                    <div className='flex flex-col justify-center w-12 h-12'>
                        <img
                            src='./images/product/save.png'
                            alt=''
                            className='object-cover w-full h-full'
                        />
                    </div>
                    <div className='text-gray-600 flex flex-col'>
                        <span>Miễn phí vận chuyển</span>
                        <span>Giao hàng miễn phí toàn quốc</span>
                    </div>
                </div>
            </div>

            <div className='main-footer  md:grid md:grid-cols-3 md:gap-y-4    lg:grid-cols-4 xl:flex xl:flex-nowrap border  px-14 xl:px-36 py-8 text-gray-600 text-sm  '>
                <div className='flex flex-col space-y-2 w-1/5'>
                    <h3 className='uppercase text-gray-700 font-semibold mb-2 whitespace-nowrap'>
                        Chăm sóc khách hàng
                    </h3>
                    <ul className='flex flex-col space-y-2'>
                        <li>
                            <a
                                href='#'
                                className='hover:text-red-600 whitespace-nowrap text-[13px] text-stone-500'>
                                Trung Tâm Trợ Giúp
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='hover:text-red-600 whitespace-nowrap text-[13px] text-stone-500'>
                                Shopee Blog
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='hover:text-red-600 whitespace-nowrap text-[13px] text-stone-500'>
                                Shopee Mall
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='hover:text-red-600 whitespace-nowrap text-[13px] text-stone-500'>
                                Hướng Dẫn Mua Hàng
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='hover:text-red-600 whitespace-nowrap text-[13px] text-stone-500'>
                                Hướng Dẫn Bán Hàng
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='hover:text-red-600 whitespace-nowrap text-[13px] text-stone-500'>
                                Thanh Toán
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='hover:text-red-600 whitespace-nowrap text-[13px] text-stone-500'>
                                Shopee Xu
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='hover:text-red-600 whitespace-nowrap text-[13px] text-stone-500'>
                                Vận Chuyển
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='hover:text-red-600 whitespace-nowrap text-[13px] text-stone-500'>
                                Trả Hàng & Hoàn Tiền
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='hover:text-red-600 whitespace-nowrap text-[13px] text-stone-500'>
                                Chăm Sóc Khách Hàng
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='hover:text-red-600 whitespace-nowrap text-[13px] text-stone-500'>
                                Chính Sách Bảo Hành
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col space-y-2 w-1/5'>
                    <h3 className='uppercase text-gray-700 font-semibold mb-2 whitespace-nowrap'>
                        Về Shopee
                    </h3>
                    <ul className='flex flex-col space-y-2'>
                        <li>
                            <a
                                href='#'
                                className='hover:text-red-600 whitespace-nowrap text-[13px] text-stone-500'>
                                Giới Thiệu Về Shopee Việt Nam
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='hover:text-red-600 whitespace-nowrap text-[13px] text-stone-500'>
                                Tuyển Dụng
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='hover:text-red-600 whitespace-nowrap text-[13px] text-stone-500'>
                                Điều Khoản Shopee
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='hover:text-red-600 whitespace-nowrap text-[13px] text-stone-500'>
                                Chính Sách Bảo Mật
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='hover:text-red-600 whitespace-nowrap text-[13px] text-stone-500'>
                                Chính Hãng
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='hover:text-red-600 whitespace-nowrap text-[13px] text-stone-500'>
                                Kênh Người Bán
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='hover:text-red-600 whitespace-nowrap text-[13px] text-stone-500'>
                                Flash Sales
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='hover:text-red-600 whitespace-nowrap text-[13px] text-stone-500'>
                                Chương Trình Tiếp Thị Liên Kết Shopee
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='hover:text-red-600 whitespace-nowrap text-[13px] text-stone-500'>
                                Liên Hệ Với Truyền Thông
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col space-y-2 w-64 max-w-1/5'>
                    <h3 className='uppercase text-gray-700 font-semibold mb-2 whitespace-nowrap'>
                        Thanh toán
                    </h3>
                    <ul className='flex flex-wrap'>
                        <li className='flex  w-16 h-8   p-2 justify-start '>
                            <div
                                style={{backgroundImage: `url('./images/footer/paymethod.png')`}}
                                className='w-full h-full footer-vn-visa-png'></div>
                        </li>
                        <li className='flex   w-16 h-8   p-2 justify-start '>
                            <div
                                style={{backgroundImage: `url('./images/footer/paymethod.png')`}}
                                className='w-full h-full footer-vn-mastercard'></div>
                        </li>
                        <li className='flex  w-16 h-8  p-2 justify-start '>
                            <div
                                style={{backgroundImage: `url('./images/footer/paymethod.png')`}}
                                className='w-full h-full footer-vn-jcb-png'></div>
                        </li>
                        <li className='flex   w-16 h-8  p-2 justify-start '>
                            <div
                                style={{backgroundImage: `url('./images/footer/paymethod.png')`}}
                                className='w-full h-full footer-vn-amex-png '></div>
                        </li>
                        <li className='flex   w-16 h-8  p-2 justify-start  '>
                            <div
                                style={{backgroundImage: `url('./images/footer/paymethod.png')`}}
                                className='w-full h-full footer-vn-vn_cod_footer-png'></div>
                        </li>
                        <li className='flex  w-16 h-8 p-2 justify-start '>
                            <div
                                style={{backgroundImage: `url('./images/footer/paymethod.png')`}}
                                className='w-full h-full footer-vn-vn_installment_footer-png'></div>
                        </li>
                        <li className='flex   w-16 h-8 p-2 justify-start'>
                            <div
                                style={{backgroundImage: `url('./images/footer/paymethod.png')`}}
                                className='w-full h-full  footer-vn-shopeepay-png'></div>
                        </li>
                    </ul>
                    <h3 className='uppercase text-gray-700 font-semibold py-4 whitespace-nowrap'>
                        Đơn vị vận chuyển
                    </h3>
                    <div className='flex flex-wrap '>
                        <div className='flex  w-16 h-8   p-2 justify-start '>
                            <div
                                style={{backgroundImage: `url('./images/footer/paymethod.png')`}}
                                className='w-full h-full footer-vn-shopee-express-png'></div>
                        </div>
                        <div className='flex   w-16 h-8   p-2 justify-start '>
                            <div
                                style={{backgroundImage: `url('./images/footer/paymethod.png')`}}
                                className='w-full h-full footer-vn-ghtk-png'></div>
                        </div>
                        <div className='flex  w-16 h-8  p-2 justify-start '>
                            <div
                                style={{backgroundImage: `url('./images/footer/paymethod.png')`}}
                                className='w-full h-full footer-vn-ghn-png'></div>
                        </div>
                        <div className='flex   w-16 h-8  p-2 justify-start '>
                            <div
                                style={{backgroundImage: `url('./images/footer/paymethod.png')`}}
                                className='w-full h-full footer-vn-viettel_post-png '></div>
                        </div>
                        <div className='flex   w-16 h-8  p-2 justify-start  '>
                            <div
                                style={{backgroundImage: `url('./images/footer/paymethod.png')`}}
                                className='w-full h-full footer-vn-vnpost-png'></div>
                        </div>
                        <div className='flex  w-16 h-8 p-2 justify-start '>
                            <div
                                style={{backgroundImage: `url('./images/footer/paymethod.png')`}}
                                className='w-full h-full footer-vn-vn_jnt_footer-png'></div>
                        </div>
                        <div className='flex   w-16 h-8 p-2 justify-start'>
                            <div
                                style={{backgroundImage: `url('./images/footer/paymethod.png')`}}
                                className='w-full h-full  footer-vn-grab_express-png'></div>
                        </div>
                        <div className='flex   w-16 h-8 p-2 justify-start'>
                            <div
                                style={{backgroundImage: `url('./images/footer/paymethod.png')`}}
                                className='w-full h-full  footer-vn-ninja-van-png'></div>
                        </div>
                        <div className='flex   w-16 h-8 p-2 justify-start'>
                            <div
                                style={{backgroundImage: `url('./images/footer/paymethod.png')`}}
                                className='w-full h-full  footer-vn-best-express-png'></div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col space-y-2 w-1/5'>
                    <h3 className='uppercase text-gray-700 font-semibold mb-2 whitespace-nowrap'>
                        Theo dõi chúng tôi trên
                    </h3>
                    <a
                        href='facebook.com'
                        className='text-gray-800 hover:text-red-900  flex items-center gap-2'>
                        <div
                            style={{backgroundImage: `url('./images/footer/paymethod.png')`}}
                            className='footer-vn-f-png  w-4 h-4'></div>
                        <span>Facebook</span>
                    </a>
                    <a
                        href='instagram.com'
                        className='text-gray-800 hover:text-red-900  flex items-center gap-2'>
                        <div
                            style={{backgroundImage: `url('./images/footer/paymethod.png')`}}
                            className='footer-vn-ins-png  w-4 h-4'></div>
                        <span>Instagram</span>
                    </a>
                    <a
                        href='linkedin.com'
                        className='text-gray-800 hover:text-red-900  flex items-center gap-2'>
                        <div
                            style={{backgroundImage: `url('./images/footer/paymethod.png')`}}
                            className='footer-vn-lin-png  w-4 h-4'></div>
                        <span>LinkedIn</span>
                    </a>
                </div>
                <div className='flex flex-col space-y-2 w-1/5'>
                    <h3 className='uppercase text-gray-700 font-semibold mb-2 whitespace-nowrap'>
                        Tải ứng dụng Shopee ngay thôi
                    </h3>
                    <a href='#' className='flex items-center  w-full h-24 '>
                        <img  src='./images/footer/qrcode.png' alt='QR Code'  className=' w-20 border  ' />  
                        
                        <div className='flex flex-col items-center flex-none w-20  justify-center gap-3'>
                            <img src='./images/footer/appstore.png' alt=''  className='w-full h-1/3 pl-3' />
                            <img src='./images/footer/playstore.png'     alt='' className='w-full h-1/3 pl-3' />
                            <img src='./images/footer/appgallery.png' alt='' className='w-full h-1/3 pl-3' />
                       </ div>
                    </a>
                </div>
            </div>

            <div className='flex px-14 xl:px-36 py-8 justify-between md:flex-col lg:flex-row bg-gray-50 text-sm gap-4 text-gray-500 '>
                <div className='whitespace-nowrap'>
                    &copy; 2022 Shopee. Tất cả các quyền được bảo lưu.
                </div>
                <div className='flex flex-auto ml-auto '>
                    <span className='whitespace-nowrap'>Quốc giá & Khu vực:</span>
                    <ul className='flex   divide-x flex-wrap  justify-center w-full  '>
                        <li className='  whitespace-nowrap px-2 '>Singapore</li>
                        <li className='  whitespace-nowrap px-2'>Indonesia</li>
                        <li className='  whitespace-nowrap px-2'>Đài Loan</li>
                        <li className='  whitespace-nowrap px-2'>Thái Lan</li>
                        <li className='  whitespace-nowrap px-2'>Malaysia</li>
                        <li className='  whitespace-nowrap px-2'>Việt Nam</li>
                        <li className='  whitespace-nowrap px-2'>Phillippines</li>
                        <li className='  whitespace-nowrap px-2'>Brazil</li>
                        <li className='  whitespace-nowrap px-2'>Mexico</li>
                        <li className='  whitespace-nowrap px-2'>Colombia</li>
                        <li className='  whitespace-nowrap px-2'>Chile</li>
                        <li className='  whitespace-nowrap px-2'>Poland</li>
                        <li className='  whitespace-nowrap px-2'>Spain</li>
                        <li className='  whitespace-nowrap px-2'>France</li>
                        <li className='  whitespace-nowrap px-2'>India</li>
                    </ul>
                </div>
            </div>

            <div className='end flex flex-col items-center justify-between pt-0 p-2 md:px-40 '>
                <div className=' flex justify-center divide-x flex-nowrap w-full py-8 items-center'>
                    <a
                        href='#'
                        className=' uppercase whitespace-nowrap text-gray-500 text-xs px-4  '>
                        Chính Sách bảo mật
                    </a>
                    <a
                        href='#'
                        className='uppercase whitespace-nowrap text-gray-500 text-xs px-4  '>
                        Quy Chế hoạt động
                    </a>
                    <a
                        href='#'
                        className='uppercase whitespace-nowrap text-gray-500 text-xs px-4  '>
                      
                        Chính sách vận chuyển{" "}
                    </a>
                    <a
                        href='#'
                        className='uppercase whitespace-nowrap text-gray-500 text-xs px-4  '>
                       
                        Chính sách trả hàng và hoàn tiền
                    </a>
                </div>

                <div className='   flex flex-nowrap items-center justify-center   h-12   '>
                    <div className='h-full flex  justify-center '>
                        <img src='./images/footer/5.png' alt='' className=' ' />
                    </div>
                    <div className='h-full flex   justify-center'>
                        <img src='./images/footer/5.png' alt='' className=' ' />
                    </div>
                    <div className=' h-full flex  justify-center '>
                        {" "}
                        <img src='./images/footer/6.png' alt='' className='' />
                    </div>
                </div>

                <div className='sm:hidden text-center  text-gray-800 text-least space-y-1'>
                    <p className='mb-2  '>Công ty TNHH Shopee</p>
                    <p>
                        Địa chỉ: Tầng 28, Tòa nhà trung tâm Lotte Hà Nội, 54 Liễu Giai, phường Cống
                        Vị, Quận Ba Đình, Hà Nội
                    </p>
                    <p>Tổng đài hỗ trợ: 19001221 - Email: support@shopee.vn</p>
                    <p>
                        Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư Hà Nội cấp lần đầu
                        ngày 10/02/2015
                    </p>
                    <p>&copy; 2015 - Bản quyền thuộc về Công ty TNHH Shopee</p>
                </div>

                <div className='sm:block hidden mt-2 text-center text-gray-800 text-xs space-y-2'>
                    <p className='mb-6'>Công ty TNHH Shopee</p>
                    <p>
                        Địa chỉ: Tầng 4-5-6, Tòa nhà trung tâm Lotte Hà Nội, số 29 Liễu Giai, phường
                        Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam Tổng đài hỗ trợ:
                        19001221 - Email: support@shopee.vn
                    </p>
                    <p>
                        Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024
                        73081221 (ext 4678)
                    </p>
                    <p>
                        Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư Hà Nội cấp lần đầu
                        ngày 10/02/2015
                    </p>
                    <p>&copy; 2015 - Bản quyền thuộc về Công ty TNHH Shopee</p>
                </div>
            </div>
         
        </footer>
    );
};
export default DesktopFooter;
