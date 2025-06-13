import React from 'react'
import ProductCard from './ProductCard'
import { useNavigate } from 'react-router-dom'

const AnotherProducts = () => {
  const navigate = useNavigate()
  return (
    <div className='mt-6 py-12'>
      <div className='flex flex-row justify-between mb-9 items-center'>
        <div className='font-semibold text-xl md:text-3xl text-black-900'>
          Sản phẩm khác
        </div>
        <div
          onClick={() => navigate('/products')}
          className='text-primary-900 text-sm sm:text-base lg:text-lg font-medium cursor-pointer flex items-center gap-1'
        >
          Xem thêm{' '}
          <img
            src='/assets/icons/double-arrow-right.png'
            className='w-4 h-4 sm:w-5 sm:h-5'
          />
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
        <ProductCard />
        <ProductCard />
        <ProductCard
          isAuction={true}
          auctionStatus='underAuction'
          auctionTime='12:00 | 12/06/2025'
        />
      </div>
    </div>
  )
}

export default AnotherProducts
