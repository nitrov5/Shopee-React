import React from 'react'

const GotoUp = () => {
  return (
      <div className='go-up fixed bottom-4 right-4 hover:bg-gray-50 cursor-pointer z-50 shadow-md bg-white w-12 h-12 rounded-full flex flex-col items-center justify-center' href="#header">
          <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M7 11l5-5m0 0l5 5m-5-5v12'
              />
          </svg>
      </div>
  );
}

export default GotoUp