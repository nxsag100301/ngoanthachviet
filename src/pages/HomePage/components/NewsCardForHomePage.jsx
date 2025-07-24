import { Button } from '@/components/ui/button'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NewsCardForHomePage = ({ image, title, date, id }) => {
  const navigate = useNavigate()
  return (
    <div
      className='shadow-lg rounded-[12px] cursor-pointer pb-4 sm:pb-6 md:max-w-[48%] lg:max-w-full flex flex-col h-full'
      onClick={() => navigate(`/news/${id}`)}
    >
      <img
        src={image}
        className='h-[253px] w-full rounded-t-[12px] object-cover mb-6 sm:mb-9'
      />
      <div className='mb-6 sm:mb-9 px-4 sm:px-6'>
        <div className='line-clamp-2 mb-2 text-[#150202] font-medium text-xl'>
          {title}
        </div>
        <div className='mb-1 sm:mb-3 text-[#626276]'>{date}</div>
      </div>
      <div className='mt-auto px-4 sm:px-6 flex justify-end'>
        <Button variant='outline' className='w-[162px] h-[50px]'>
          Chi tiết
        </Button>
      </div>
    </div>
  )
}

export default NewsCardForHomePage
