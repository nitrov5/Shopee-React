
const SaleOff = ({salePercent}) => {
  return (
      <div className='bg-yellow-400/80  w-9 h-9 lg:w-12 lg:h-10 uppercase text-xs flex flex-col items-center  absolute right-0 top-0 z-50'>
          <div className='flex flex-col items-center  h-full px-2 py-0.5 after:lg:border-[20px] after:border-[15px] after:lg:border-b-[6px] after:border-b-[4px] after:border-t-0 after:border-yellow-400/80 after:border-b-white after:w-full after:absolute after:bottom-0.5 after:translate-y-full'>
              <span className='text-xs lg:text-md text-red-500 font-semibold'>{salePercent}</span>
              <span className='text-white font-semibold text-xs'> Giảm</span>
          </div>
      </div>
  );
}

export default SaleOff