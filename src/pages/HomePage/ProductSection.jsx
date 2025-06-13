import ProductCard from '@/components/ProductCard'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductSection = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-[#FDFDFD]'>
      <div className='max-w-screen-2xl w-full px-6 lg:px-20  py-12 mx-auto'>
        <div className='flex flex-row justify-between mb-9 items-center'>
          <div className='font-penumbra font-bold text-2xl lg:text-3xl xl:text-4xl text-primary-600'>
            Sản phẩm
          </div>
          <div
            onClick={() => navigate('/products')}
            className='text-primary-900 text-base lg:text-lg font-medium cursor-pointer flex items-center gap-1'
          >
            Xem thêm{' '}
            <img
              src='/assets/icons/double-arrow-right.png'
              className='w-5 h-5'
            />
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  )
}

export default ProductSection
