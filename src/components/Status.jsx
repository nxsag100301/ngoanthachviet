import React from 'react'

const Status = () => {
  return (
    <div
      className='bg-[#EEFFE2] rounded-2xl p-4 h-[48px] xl:h-[62px] mb-4 text-[#009800]
       font-medium text-xs md:text-sm tracking-[0.15px] flex flex-row items-center justify-center gap-2 xl:gap-4'
    >
      <img
        src='/assets/icons/checked.png'
        className='w-7 h-7 tracking-[0.15px]'
      />
      Đã được định danh bởi Ngoạn Thạch Việt
    </div>
  )
}

export default Status
