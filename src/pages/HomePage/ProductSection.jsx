import ProductCard from '@/components/ProductCard'
import React from 'react'

const ProductSection = () => {
  return (
    <div className='bg-[#FDFDFD]'>
      <div className='max-w-screen-2xl w-full px-6 lg:px-20  py-12 mx-auto'>
        <div className='flex flex-row justify-between mb-9 items-center'>
          <div className='font-penumbra font-bold text-4xl text-primary-600'>
            Sản phẩm
          </div>
          <div className='text-primary-900 text-lg font-medium cursor-pointer'>
            Xem thêm
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
