import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className='relative w-full '>
      <div className='w-full bg-primary-1000'>
        <div className='w-full max-w-screen-2xl mx-auto pt-1 sm:pt-6 pb-2 sm:pb-9 px-6 lg:px-20 '>
          <div className='flex flex-col lg:flex-row gap-0 justify-between'>
            <div className='flex flex-col gap-6 items-center'>
              <div className=''>
                <img
                  src='/assets/images/logo.png'
                  className='w-[224px] sm:w-[264px] h-[108px] object-cover mx-auto'
                />
                <div className='mx-auto font-medium text-base sm:text-lg text-white text-justify'>
                  Nghệ thuật từ đá - Vẻ đẹp tự nhiên, tinh hoa đất trời
                </div>
              </div>
              <div className='flex flex-row gap-9'>
                <div className='w-[52px] h-[52px] rounded-full bg-primary-600 flex justify-center items-center cursor-pointer'>
                  <img src='/assets/icons/fb.png' className='z-10' />
                </div>
                <div className='w-[52px] h-[52px] rounded-full bg-primary-600 flex justify-center items-center cursor-pointer'>
                  <img src='/assets/icons/yt.png' className='z-10' />
                </div>
                <div className='w-[52px] h-[52px] rounded-full bg-primary-600 flex justify-center items-center cursor-pointer'>
                  <img src='/assets/icons/tele.png' className='z-10' />
                </div>
              </div>
            </div>
            <div className='flex flex-row gap-20 sm:gap-[125px] justify-between xl:justify-between text-white pt-4 max-w-[613px]'>
              <div className='z-10'>
                <div className='font-semibold text-base sm:text-lg mb-3 sm:mb-6 cursor-pointer'>
                  Dịch vụ
                </div>
                <div
                  onClick={() => navigate('/products')}
                  className='mb-2 sm:mb-4 font-medium text-xs sm:text-sm text-[#D2D2D2] cursor-pointer'
                >
                  Sản phẩm
                </div>
                <div
                  onClick={() => navigate('/news')}
                  className='mb-2 sm:mb-4 font-medium text-xs sm:text-sm text-[#D2D2D2] cursor-pointer'
                >
                  Tin tức
                </div>
                <div
                  onClick={() => navigate('/auction')}
                  className='mb-2 sm:mb-4 font-medium text-xs sm:text-sm text-[#D2D2D2] cursor-pointer'
                >
                  Đấu giá
                </div>
                <div className='mb-2 sm:mb-4 font-medium text-xs sm:text-sm text-[#D2D2D2] cursor-pointer'>
                  Theo dõi
                </div>
              </div>
              <div className='w-1/2 sm:max-w-[392px] tracking-[0.15px] leading-[34px] font-medium'>
                <div className='font-semibold text-base sm:text-lg mb-3 sm:mb-6'>
                  Liên hệ
                </div>
                <div className='mb-2 sm:mb-4 font-medium text-xs sm:text-sm text-[#D2D2D2] '>
                  <span className='text-black-200'>Số điện thoại:</span>{' '}
                  <a href='tel:0986663878'>0986663878</a>
                </div>
                <div className='mb-2 sm:mb-4 font-medium text-xs sm:text-sm text-[#D2D2D2] break-words'>
                  <span className='text-black-200'>Email:</span>{' '}
                  <a href='mailto:ngoanthachviet@gmail.com'>
                    ngoanthachviet@gmail.com
                  </a>
                </div>
                <div className='mb-2 sm:mb-4 font-medium text-xs sm:text-sm text-[#D2D2D2] text-justify'>
                  <span className='text-black-200'>Địa chỉ:</span>{' '}
                  <span
                    onClick={() =>
                      window.open(
                        'https://maps.app.goo.gl/85ApnPmXXW49heSu7?g_st=com.google.maps.preview.copy',
                        '_blank'
                      )
                    }
                    className='cursor-pointer'
                  >
                    167 Lý Thường Kiệt, huyện Di Linh, tỉnh Lâm Đồng
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full bg-primary-600 select-none'>
        <div className='w-full max-w-screen-2xl mx-auto py-4 px-6 lg:px-20 text-center text-sm sm:text-base font-normal'>
          © Copyright 2025 by NgoanThachViet. All right Reserved - Design by
          PhucKhangNet
        </div>
      </div>
      <img
        src='/assets/images/mountain-footer.png'
        className='absolute left-0 bottom-0 mix-blend-color-burn select-none'
      />
    </div>
  )
}

export default Footer
