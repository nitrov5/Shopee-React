import React from 'react'

const DefaultTitle = ({viewMore, viewAll, titleMobile, titleDesktop}) => {
  return (
      <div className={`flex justify-between items-center text-red-600 w-full`}>
          <p className='title md:hidden uppercase font-semibold'>{titleMobile}</p>
          <p className='title hidden md:block uppercase text-gray-800'>{titleDesktop}</p>
          <button className='flex items-center gap-1'>
              <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                      strokeLinecap='round'
                      strokeWnejoin='round'
                      strokeWidth='2'
                      d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                  />
              </svg>
              <a href={viewMore}>
                  <span className='text-xs font-semibold lg:hidden'>Xem Thêm</span>
              </a>
              <a href={viewAll}>
                  <span className='text-xs font-semibold text-red-500 hidden lg:block'>Xem Tất Cả</span>
              </a>
          </button>
      </div>
  );
}

export default DefaultTitle