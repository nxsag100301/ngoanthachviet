import { Button } from '@/components/ui/button'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const HeroSection = () => {
  return (
    <div className='w-full h-[600px] md:h-[700px] lg:h-[889px] bg-[#24180D] backdrop-blur-[5.3px] opacity-100 relative'>
      <img
        src='/assets/images/mountain.png'
        className='absolute object-cover h-full w-screen object-top'
      />
      <div
        className='pt-[230px] 2xl:pt-[310px] relative mx-auto max-w-screen-2xl px-6 
      lg:px-20 w-[340px] sm:w-[640px] md:w-[768px] lg:w-full z-20'
      >
        <div className='lg:mx-0 w-full lg:w-full'>
          <div
            className='text-[20px] md:text-[22px] lg:text-[30px] xl:text-[36px] leading-[30px] md:leading-[34px] lg:leading-[44px] 
          font-medium text-white mb-3 md:mb-6 '
          >
            Ngoạn Thạch Việt giới thiệu
          </div>
          <div className='font-penumbra font-bold text-[33px] md:text-[42px] lg:text-[55px] xl:text-[63px] leading-5 md:leading-[100%] md:tracking-[6%] text-white uppercase'>
            Nghệ thuật <br />
          </div>
          <div className='font-penumbra font-bold text-[33px] md:text-[42px] lg:text-[55px] xl:text-[63px] leading-5 md:leading-[100%] md:tracking-[6%] text-[#E68D09] uppercase mt-6'>
            Đá cảnh suiseki
          </div>
          <Button
            className='w-[120px] h-[40px] md:w-[172px] md:h-[60px] relative 
          justify-center text-white text-[14px] md:text-base leading-7 
          tracking-wide select-none mt-[24px] xl:mt-[48px] z-20'
          >
            <span className='absolute top-1.5 left-4 md:top-4 md:left-10'>
              Xem ngay
            </span>
            <FaArrowRight className='absolute top-[13px] right-4 md:top-6 md:right-8' />
          </Button>
        </div>
        <img
          src='/assets/images/stone.png'
          className='absolute hidden sm:block right-4 md:right-0 lg:right-4 top-[184px] lg:top-[160px] xl:top-32 2xl:top-[185px]
          w-[310px] h-[260px] md:w-[410px] md:h-[340px] lg:w-[500px] lg:h-[410px] xl:w-[590px] xl:h-[500px] bottom-0'
        />
      </div>
      <img
        src='/assets/images/cloud-top.png'
        className='absolute bottom-0 w-full h-full object-cover z-10'
      />
      <img
        src='/assets/images/shape.png'
        className='absolute bottom-0 w-full h-fullobject-cover z-10'
      />
      <div className='gradient-bottom' />
    </div>
  )
}

export default HeroSection
