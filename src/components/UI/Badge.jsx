import React from 'react'

const Badge = () => {
  return (
      <div className='cart bg-white w-0 group-hover:w-72 h-0 group-hover:h-72   transition-all absolute z-50 bottom-0 right-0 translate-y-full  shadow-md opacity-0 group-hover:opacity-100  group-hover:flex'>
          <div className='relative w-full h-full flex justify-center items-center flex-col'>
              <div className='absolute w-0 h-0 top-0.5 right-1 border-[10px] border-transparent border-b-white -translate-y-full'></div>
              <h3 className='text-sky-700'>Chưa có sản phẩm</h3>
          </div>
      </div>
  );
}

export default Badge