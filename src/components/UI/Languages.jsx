import React from 'react'

const Languages = () => {
  return (
      <div className='absolute z-50 bg-white  bottom-0 right-0  translate-y-full opacity-0 transition-all  group-hover:opacity-100 h-0 group-hover:h-24 w-0   group-hover:w-48   rounded-sm shadow-md '>
          <div className='relative w-full h-full flex flex-col '>
              <div className='absolute right-8 top-0.5 -translate-y-full   w-0 h-0 border-8  border-t-0 border-transparent border-b-white '></div>

              <a href='#' className='text-gray-800 p-4 py-3'>
                  Tiếng Việt
              </a>
              <a href='#' className='text-gray-800 p-4 py-3'>
                  Tiếng Anh
              </a>
          </div>
      </div>
  );
}

export default Languages