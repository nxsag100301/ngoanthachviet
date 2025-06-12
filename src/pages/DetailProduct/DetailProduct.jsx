import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const DetailProduct = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  return (
    <div className='max-w-screen-2xl mx-auto bg-white px-6 lg:px-20 pt-9 pb-12'>
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
        <span
          onClick={() => navigate('/products')}
          className='cursor-pointer text-primary-600'
        >
          Sản phẩm
        </span>
        <img src='/assets/icons/right-triangle.png' className='w-4 h-4' />
        <span className='text-gray-400 select-none'>Chi tiết</span>
      </div>
    </div>
  )
}

export default DetailProduct
