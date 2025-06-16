import ContactForm from '@/components/ContactForm'
import React from 'react'

const InformationCard = ({
  bgColor,
  bgIconColor,
  icon,
  title,
  titleColor,
  description,
  descriptionColor
}) => {
  return (
    <div
      className={`h-[76px] bg-${bgColor} flex flex-row items-center py-3 pl-9 pr-6 gap-6 rounded-xl`}
      style={{ backgroundColor: bgColor }}
    >
      <div
        className={`w-[50px] h-[50px] rounded-full bg-${bgIconColor} flex items-center justify-center`}
      >
        <img src={`/assets/icons/${icon}`} className='w-6 h-6' />
      </div>
      <div className='space-y-1'>
        <div className={`text-${titleColor} text-lg font-semibold`}>
          {title}
        </div>
        <div
          className={`text-${descriptionColor} font-medium text-xs max-w-[135px] break-words`}
        >
          {description}
        </div>
      </div>
    </div>
  )
}

const ContactSection = () => {
  return (
    <div className='bg-[#FDFDFD]'>
      <div className='bg-primary-600 h-[80px] sm:h-[120px] md:h-[154px] relative'>
        <img
          src='/assets/images/mountain-contact.png'
          className='mix-blend-soft-light absolute object-cover w-full h-full border-2'
        />
        <div className='w-full text-center relative select-none mb-16 pt-2 md:pt-7'>
          <div className='font-aquarelle text-[22px] sm:text-[32px] text-primary-1000 font-normal lowercase'>
            Kết nối
          </div>
          <div className='absolute left-1/2 -translate-x-1/2 top-7 sm:top-9 md:top-14 font-penumbra font-bold text-[24px] sm:text-[36px] text-white'>
            Liên hệ
          </div>
        </div>
      </div>
      <div className='max-w-screen-2xl mx-auto max-h-[713px] w-full py-12 px-6 lg:px-20'>
        <div className='hidden xl:flex flex-row justify-between mb-9'>
          <InformationCard
            bgColor='primary-600'
            bgIconColor='white'
            icon='call.png'
            title='Số điện thoại'
            titleColor='white'
            description='0123456789'
            descriptionColor='black-900'
          />
          <InformationCard
            bgColor='#F0F0F0'
            bgIconColor='primary-600'
            icon='mail.png'
            title='Email'
            titleColor='primary-600'
            description='ngoanthachviet@gmail.com'
            descriptionColor='black-400'
          />
          <InformationCard
            bgColor='primary-600'
            bgIconColor='white'
            icon='clock.png'
            title='Giờ hoạt động'
            titleColor='white'
            description='9h00 - 18h00'
            descriptionColor='black-900'
          />
          <InformationCard
            bgColor='#F0F0F0'
            bgIconColor='primary-600'
            icon='mark.png'
            title='Địa chỉ'
            titleColor='primary-600'
            description='D2 đường 5B Him Lam, P. Tân Hưng, Quận 7'
            descriptionColor='black-400'
          />
        </div>

        <div className='flex flex-row shadow-2xl max-h-[504px] rounded-[20px]'>
          <img
            src='/assets/images/map.png'
            className='hidden md:block object-cover md:w-1/2 xl:w-auto'
          />
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ContactSection
