import ContactForm from '@/components/ContactForm'
import React from 'react'

const InformationCard = ({
  bgColor,
  bgIconColor,
  icon,
  title,
  titleColor,
  description,
  descriptionColor,
  type // 'email' | 'phone' | 'address'
}) => {
  let href = ''
  if (type === 'email') {
    href = `mailto:${description}`
  } else if (type === 'phone') {
    href = `tel:${description}`
  } else if (type === 'address') {
    href =
      'https://maps.app.goo.gl/85ApnPmXXW49heSu7?g_st=com.google.maps.preview.copy'
  }

  return (
    <div
      className={`h-[76px] lg:min-w-[255px] bg-${bgColor} flex flex-row items-center py-3 px-6 gap-4 rounded-xl`}
      style={{ backgroundColor: bgColor }}
    >
      <div
        className={`w-[50px] h-[50px] rounded-full bg-${bgIconColor} flex items-center justify-center`}
      >
        <img src={`/assets/icons/${icon}`} className='w-6 h-6' />
      </div>

      <div className='space-y-1'>
        <div className={`text-${titleColor} text-xs font-semibold`}>
          {title}
        </div>

        {type ? (
          <a
            href={href}
            target={type === 'address' ? '_blank' : '_self'}
            rel='noopener noreferrer'
            className={`text-${descriptionColor} font-medium text-xs max-w-[169px] inline-block`}
          >
            {description}
          </a>
        ) : (
          <div
            className={`text-${descriptionColor} font-medium text-xs max-w-[169px]`}
          >
            {description}
          </div>
        )}
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
          className='mix-blend-soft-light absolute object-cover w-full h-full'
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
      <div className='max-w-screen-2xl mx-auto min-h-[713px] w-full py-12 px-6 lg:px-20'>
        <div className='hidden xl:flex flex-row justify-between mb-9'>
          <InformationCard
            bgColor='primary-600'
            bgIconColor='white'
            icon='call.png'
            title='Số điện thoại'
            titleColor='white'
            description='0986663878'
            descriptionColor='black-900'
            type='phone'
          />
          <InformationCard
            bgColor='#F0F0F0'
            bgIconColor='primary-600'
            icon='mail.png'
            title='Email'
            titleColor='primary-600'
            description='ngoanthachviet@gmail.com'
            descriptionColor='black-400'
            type='email'
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
            description='167 Lý Thường Kiệt, Di Linh, Lâm Đồng'
            descriptionColor='black-400'
            type='address'
          />
        </div>

        <div className='flex flex-col md:flex-row shadow-xl min-h-[504px] rounded-[20px]'>
          <img
            src='/assets/images/map2.png'
            className='object-cover object-center h-[300px] sm:h-[350px] md:h-auto md:w-1/2 md:max-w-[540px] rounded-tr-[20px]
            rounded-tl-[20px] md:rounded-tr-none md:rounded-bl-[20px] xl:w-auto cursor-pointer'
            onClick={() =>
              window.open(
                'https://maps.app.goo.gl/85ApnPmXXW49heSu7?g_st=com.google.maps.preview.copy',
                '_blank'
              )
            }
          />
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ContactSection
