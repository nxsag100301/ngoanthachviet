import React from 'react'
import { Button } from './ui/button'
import { FaArrowRight } from 'react-icons/fa'

const HeroSection = () => {
  return (
    <div className='h-[899px] w-full bg-primary-1000 relative top-0'>
      <img
        src='/assets/images/mountain2.png'
        className='absolute opacity-15 object-cover h-full w-full object-position-xl'
      />
      <div className='pt-[262px] select-none relative mx-auto max-w-screen-2xl px-6 xl:px-20 border-2 w-full md:w-[768px] lg:w-full'>
        <div className='border-2 lg:mx-0 w-full md:w-[400px] lg:w-full'>
          <div className='text-[24px] leading-[34px] xl:text-[36px] xl:leading-[44px] font-medium text-white mb-6'>
            Ngoạn Thạch Việt giới thiệu
          </div>
          <div className='font-penumbra font-bold text-[45px] xl:text-[63px] leading-[100%] tracking-[6%] text-white uppercase'>
            Nghệ thuật <br />
          </div>
          <div className='font-penumbra font-bold text-[45px] xl:text-[63px] leading-[100%] tracking-[6%] text-[#E68D09] uppercase mt-6'>
            Đá cảnh suiseki
          </div>
          <Button className='w-[172px] h-[60px] relative justify-center text-white text-base leading-7 tracking-wide select-none mt-[24px] xl:mt-[48px]'>
            <span className='absolute top-4 left-10'>Xem thêm</span>
            <FaArrowRight className='absolute top-6 right-8' />
          </Button>
        </div>

        <img
          src='/assets/images/stone.png'
          className='absolute hidden md:block right-4 xl:top-32 md:w-[330px] md:h-[280px] xl:w-[590px] xl:h-[500px] border-2 bottom-0 top-auto'
        />
      </div>
    </div>
  )
}

export default HeroSection
