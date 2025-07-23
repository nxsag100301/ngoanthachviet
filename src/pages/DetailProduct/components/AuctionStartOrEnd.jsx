const AuctionStartOrEnd = () => {
  return (
    <div className='h-[72px] rounded-[6px] py-2 px-4 lg:px-6 flex justify-between bg-bluebg items-center'>
      <span className='text-sm font-semibold sm:text-lg md:text-base lg:text-lg text-blue'>
        Đấu giá bắt đầu sau
      </span>
      <div className='flex flex-row gap-2 sm:gap-4  lg:gap-8 items-center'>
        <div
          className='bg-blue w-[30px] h-[24px] md:w-[48px] md:h-[40px] rounded-[2px] 
          flex justify-center items-center text-white text-base sm:text-xl md:text-md font-bold px-[6px] py-2'
        >
          01
        </div>
        <div
          className='bg-blue w-[30px] h-[24px] md:w-[48px] md:h-[40px] rounded-[2px] 
          flex justify-center items-center text-white text-base sm:text-xl md:text-md font-bold px-[6px] py-2'
        >
          15
        </div>
        <div
          className='bg-blue w-[30px] h-[24px] md:w-[48px] md:h-[40px] rounded-[2px] 
          flex justify-center items-center text-white text-base sm:text-xl md:text-md font-bold px-[6px] py-2'
        >
          29
        </div>
      </div>
    </div>
  )
}

export default AuctionStartOrEnd
