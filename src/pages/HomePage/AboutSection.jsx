import React from 'react'

const AboutSection = () => {
  return (
    <div className='relative w-full'>
      <img
        src='/assets/images/cloud-bottom.png'
        className='absolute top-[0px] w-full h-[223px] object-cover'
      />
      <div className='px-6 lg:px-20 pt-6 pb-16 bg-[#EBEAEA]'>
        <div className='w-full text-center relative select-none mb-16'>
          <div className='font-aquarelle text-[22px] sm:text-[32px] text-[#616161] font-normal lowercase'>
            Giới thiệu về
          </div>
          <div className='absolute w-full left-1/2 -translate-x-1/2 top-6 sm:top-8 font-penumbra font-bold text-[24px] sm:text-[36px] text-[rgba(230,141,9,1)]'>
            Chúng tôi
          </div>
        </div>
        <div className='flex flex-col justify-center lg:flex-row relative max-w-screen-2xl mx-auto'>
          <div className='w-full lg:w-1/2 h-full'>
            <div className='max-w-full text-center lg:text-start lg:max-w-[410px] mb-0 lg:mb-16 mx-auto lg:mx-0'>
              <div className='text-primary-600 font-bold text-xl sm:text-2xl uppercase mb-1'>
                Ngoạn Thạch Việt
              </div>
              <div className='text-primary-900 text-sm lg:text-base text-center lg:text-justify'>
                Hội tụ những người đam mê nghệ thuật đá Suiseki và sưu tầm đá
                cảnh tại Việt Nam.
              </div>
            </div>
            <img
              src='/assets/images/about-stone2.png'
              className='w-[646px] h-[352px] object-cover lg:object-contain  mx-auto'
            />
          </div>
          <div className='flex flex-col-reverse lg:flex-col w-full lg:w-1/2 h-full'>
            <img
              src='/assets/images/about-stone.png'
              className='w-[634px] h-[346px] object-cover lg:object-contain mx-auto'
            />
            <div className='max-w-full text-center lg:text-start lg:max-w-[450px] mb-0 lg:mb-16 mx-auto lg:mx-0 lg:pb-10'>
              <div className='text-primary-600 font-bold text-xl sm:text-2xl uppercase mb-1'>
                Giá trị cốt lõi
              </div>
              <div className='text-primary-900 text-sm lg:text-base text-center lg:text-justify'>
                Là một không gian để kết nối, chia sẻ kinh nghiệm và khám phá
                những giá trị văn hóa mà thiên nhiên đã ban tặng.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
