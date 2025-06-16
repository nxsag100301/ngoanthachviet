import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AnotherProducts from '@/components/AnotherProducts'
import AuctionDialog from '@/components/AuctionDialog'
import Status from '@/components/Status'
import AuctionInfomation from './AuctionInformation'
import ImageGallery from './ImageGallery'
import AuctionStartOrEnd from './AuctionStartOrEnd'
import ProductDescription from './ProductDescription'
import AuctionLive from './AuctionLive'

const DetailProduct = () => {
  // eslint-disable-next-line no-unused-vars
  const { id } = useParams()
  const navigate = useNavigate()
  const [isAuction, setIsAuction] = useState(false)
  const listImage = [
    'detail-prod.png',
    'about-stone.png',
    'about-stone2.png',
    'representative.png'
  ]
  return (
    <div className='max-w-screen-2xl mx-auto bg-white px-6 lg:px-20 pt-9 pb-12'>
      <div className='font-bold font-penumbra text-xl sm:text-2xl md:text-3xl xl:text-4xl text-primary-600 mb-3 sm:mb-6 uppercase'>
        Sản phẩm
      </div>
      <div className='flex flex-row gap-2 items-center text-sm sm:text-lg mb-4 sm:mb-6'>
        <span
          onClick={() => navigate('/')}
          className='cursor-pointer text-primary-600'
        >
          Trang chủ
        </span>
        <img src='/assets/icons/right-triangle.png' className='w-4 h-4' />
        <span
          onClick={() => navigate('/products')}
          className='cursor-pointer text-primary-600'
        >
          Sản phẩm
        </span>
        <img src='/assets/icons/right-triangle.png' className='w-4 h-4' />
        <span className='text-gray-400 select-none'>Chi tiết</span>
      </div>
      <div className='flex flex-col md:flex-row gap-[20px] sm:gap-[40px] xl:gap-[108px] '>
        <div className='w-full md:w-1/2'>
          <ImageGallery listImage={listImage} />
          <div className='mt-4 sm:mt-6 h-[80px] sm:h-[104px] rounded-[12px] px-4 sm:px-9 py-4 shadow-lg flex flex-row justify-between items-center'>
            <div className='flex flex-col gap-1 sm:gap-2'>
              <span className='text-black-500 text-sm sm:text-base'>
                Giá khởi điểm
              </span>
              <span className='text-primary-800 text-lg sm:text-2xl md:text-lg lg:text-xl xl:text-2xl font-semibold'>
                3.000.000 VND
              </span>
            </div>
            <Button
              onClick={() => setIsAuction((prev) => !prev)}
              className='w-[113px] h-[50px] sm:w-[195px] sm:h-[60px] md:w-[110px] md:h-[45px] lg:w-[160px] xl:w-[195px] lg:h-[60px] px-6 py-4 text-white text-lg'
            >
              Đấu giá
            </Button>
          </div>
        </div>
        <div className='w-full md:w-1/2'>
          <div className='flex flex-row justify-between items-center mb-3 sm:mb-4'>
            <span className='text-[#01021D] text-2xl font-semibold'>
              Đá cảnh thác chảy
            </span>
            <div className='w-10 h-10 bg-[#E5E5E5] flex items-center justify-center rounded-[12px] cursor-pointer'>
              <img src='/assets/icons/bell.png' />
            </div>
          </div>
          <div className='w-full sm:w-[60%] mb-4 sm:mb-6'>
            <Status />
          </div>
          <div className='flex flex-row justify-between mb-6'>
            <div className='flex flex-col gap-2'>
              <span className='text-black-500 font-normal text-xs sm:text-sm'>
                Thời gian bắt đầu
              </span>
              <span className='text-black-500 font-semibold text-sm sm:text-base'>
                15:00 | 13/06/2025
              </span>
            </div>
            <div className='flex flex-col gap-2 items-end'>
              <span className='text-black-500 font-normal text-xs sm:text-sm'>
                Thời gian kết thúc
              </span>
              <span className='text-black-500 font-semibold text-sm sm:text-base'>
                15:00 | 13/06/2025
              </span>
            </div>
          </div>
          <div className='mb-6'>
            <AuctionStartOrEnd />
          </div>
          {/* <AuctionLive /> */}
          <ProductDescription />
        </div>
      </div>
      <div className='mt-6'>
        <AuctionInfomation />
      </div>
      <div>
        <AnotherProducts />
      </div>
      <AuctionDialog open={isAuction} setOpen={setIsAuction} />
    </div>
  )
}

export default DetailProduct
