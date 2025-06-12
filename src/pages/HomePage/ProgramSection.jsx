import { Button } from '@/components/ui/button'
import React from 'react'

const ProgramSection = () => {
  return (
    <div className='bg-[#FDFDFD] relative pt-4 pb-16 '>
      <div className='w-full text-center relative select-none mb-16'>
        <div className='font-aquarelle text-[22px] sm:text-[32px] text-[#616161] font-normal lowercase'>
          Chương trình
        </div>
        <div className='absolute left-1/2 -translate-x-1/2 top-6 sm:top-8 font-penumbra font-bold text-[24px] sm:text-[36px] text-[rgba(230,141,9,1)]'>
          Hoạt động
        </div>
      </div>
      <div className='relative max-w-screen-xl h-[300px] sm:h-[400px] md:h-[550px] xl:h-[710px] mx-auto  rounded-3xl'>
        <div className='absolute inset-0 rounded-3xl overflow-hidden z-0 px-6 lg:px-20'>
          <img
            src='/assets/images/program.png'
            alt='background'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 backdrop-blur-[12px] bg-white/10'></div>
        </div>
        <img
          src='/assets/images/logo.png'
          className='absolute object-contain h-[65px] sm:h-[85px] md:h-[100px] xl:h-[130px] left-1/2 -translate-x-1/2 top-0 xl:top-2'
        />
        <Button
          className='z-30 absolute w-[90px] h-10 xl:w-[155px] xl:h-[60px] bg-white text-primary-600 rounded-[32px] text-sm xl:text-xl
        bottom-8 sm:bottom-24 md:bottom-32 xl:bottom-44 left-1/2 -translate-x-1/2'
        >
          <img
            src='/assets/icons/trophy.png'
            className='w-4 h-4 xl:w-7 xl:h-7'
          />
          Hội thi
        </Button>
        <Button
          className='absolute w-[90px] h-10 xl:w-[155px] xl:h-[60px] bg-white/70 text-gray-400 rounded-[32px] text-sm xl:text-xl z-30
        bottom-16 sm:bottom-32 md:bottom-40 xl:bottom-52 right-3 sm:right-6 md:right-10 lg:right-20 flex items-center px-2'
        >
          <img
            src='/assets/icons/gallery.png'
            className='w-4 h-4 xl:w-7 xl:h-7 '
          />
          Triển lãm
        </Button>
        <Button
          className='absolute w-[90px] h-10 xl:w-[155px] xl:h-[60px] bg-white/70 text-gray-400 rounded-[32px] text-sm xl:text-xl z-30
        bottom-16 sm:bottom-32 md:bottom-40 xl:bottom-52 left-3 sm:left-6 md:left-10 lg:left-20'
        >
          <img
            src='/assets/icons/megaphone.png'
            className='w-4 h-4 xl:w-7 xl:h-7'
          />
          Tư vấn
        </Button>
        <div className='z-20 relative h-full mx-6 lg:mx-20'>
          <img
            src='/assets/images/program.png'
            className='object-cover h-[200px] sm:h-[240px] md:h-[370px] xl:h-[434px] rounded-3xl 
            absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'
          />
        </div>
      </div>
    </div>
  )
}

export default ProgramSection
