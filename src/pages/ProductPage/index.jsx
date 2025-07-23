import ProductCard from '@/components/ProductCard'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductPage = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-[#FDFDFD] max-w-screen-2xl px-6 lg:px-20 pt-9 pb-12 mx-auto'>
      <div className='font-bold font-penumbra text-xl sm:text-2xl md:text-3xl xl:text-4xl text-primary-600 mb-6 uppercase'>
        Sản phẩm
      </div>
      <div className='flex flex-row gap-2 items-center text-lg mb-6'>
        <span
          onClick={() => navigate('/')}
          className='cursor-pointer text-primary-600'
        >
          Trang chủ
        </span>
        <img src='/assets/icons/right-triangle.png' className='w-4 h-4' />
        <span className='text-gray-400 select-none'>Sản phẩm</span>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
        {Array.from({ length: 7 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  )
}

export default ProductPage
