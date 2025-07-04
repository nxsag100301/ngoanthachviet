import Status from '@/components/Status'
import { Button } from '@/components/ui/button'
import React from 'react'

const RepresentativeSection = () => {
  return (
    <div className='h-full w-full bg-gray-25 pt-9 pb-4 lg:pb-16 tracking-[0.15px]'>
      <div className='w-full text-center relative select-none mb-4 lg:mb-16'>
        <div className='font-aquarelle text-[22px] sm:text-[32px] text-[#616161] font-normal lowercase'>
          Nghệ thuật
        </div>
        <div className='absolute left-1/2 -translate-x-1/2 top-6 sm:top-8 font-penumbra font-bold text-[24px] sm:text-[36px] text-primary-600'>
          Tiêu biểu
        </div>
        <div className='max-w-screen-2xl mt-20 mx-auto flex flex-col lg:flex-row items-center gap-6 xl:gap-16 px-6 lg:px-20'>
          <div className='w-full lg:w-1/2 relative'>
            <img
              src='assets/images/representative.png'
              className='mx-auto lg:w-auto object-cover w-full'
            />
            <img
              src='/assets/images/logo.png'
              className='absolute w-[100px] h-[60px] sm:w-[160px] sm:h-[100px] top-0 left-1/2 -translate-x-1/2'
            />
          </div>
          <div className='w-full lg:w-1/2'>
            <div className='uppercase text-black font-bold text-center lg:text-start text-lg xl:text-2xl mb-2 md:px-16 lg:px-0'>
              ĐÁ CÁCH TỰ NHIÊN Suiseki SK031
            </div>
            <div className='text-sm xl:text-base text-gray-400 font-normal mb-2 text-justify'>
              Là một khối đá tự nhiên 100%, từ dòng đá Canxit Sông Mã, Sơn La.
              Nó có hình dáng của một dãy núi hùng vĩ. Trên trên núi có cáo hố
              như những chiếc hồ trên núi. Dọc theo sườn núi, có các vân đá màu
              trắng tựa như nước của những dòng suối đang chảy xuống thung lũng
              bên dưới. Nhìn tổng thể thì vên đá như một khung cảnh thu nhỏ của
              những ngọn núi cao thấp trùng điệp, có hồ, có suối và thung lũng…
            </div>
            <div className=' sm:w-[320px] md:w-[358px] mb-4 xl:mb-9 mx-auto lg:mx-0'>
              <Status />
            </div>
            <div className='flex flex-row justify-center lg:justify-start gap-4 md:gap-8'>
              <Button className='h-[45px] w-[162px] md:h-[60px] text-white text-sm md:text-lg'>
                Xem thông tin
              </Button>
              <Button
                variant='outline'
                className=' h-[45px] w-[162px] md:h-[60px] text-sm md:text-lg'
              >
                Lịch sử
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RepresentativeSection
