const AuctionStartOrEnd = ({ auctionTime }) => {
  return (
    <div>
      <div className='mb-3 text-xs md:text-sm text-[#565656]'>
        Thời gian mở:{` `} <span className='font-bold'>{auctionTime}</span>
      </div>
      <div className='h-[45px] rounded-[6px] py-2 px-3 lg:px-6 flex justify-between bg-bluebg items-center'>
        <div className='flex gap-[6px] items-center'>
          <img
            src='assets/icons/clock2.png'
            className='w-4 h-4 md:w-[20px] md:h-[20px]'
          />
          <span className='text-xs md:text-sm text-blue'>Bắt đầu trong</span>
        </div>
        <div className='flex flex-row gap-[6px] items-center'>
          <div
            className='bg-blue w-5 h-4 md:w-[34px] md:h-[28px] rounded-[2px] 
          flex justify-center items-center text-white text-xs md:text-md font-bold'
          >
            01
          </div>
          <div
            className='bg-blue w-5 h-4 md:w-[34px] md:h-[28px] rounded-[2px] 
          flex justify-center items-center text-white text-xs md:text-md font-bold'
          >
            15
          </div>
          <div
            className='bg-blue w-5 h-4 md:w-[34px] md:h-[28px] rounded-[2px] 
          flex justify-center items-center text-white text-xs md:text-md font-bold'
          >
            29
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuctionStartOrEnd
