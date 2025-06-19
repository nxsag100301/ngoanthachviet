import React from 'react'
import { Button } from './ui/button'

const NewsCard = ({ image, title, date, id }) => {
  return (
    <div className='shadow-lg rounded-[12px] cursor-pointer pb-4 sm:pb-6'>
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
      <Button
        variant='outline'
        className='mx-4 sm:mx-6 float-right w-[162px] h-[50px]'
      >
        Chi tiết
      </Button>
    </div>
  )
}

export default NewsCard
