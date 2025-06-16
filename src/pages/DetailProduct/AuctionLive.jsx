import React from 'react'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

const AuctionLive = () => {
  return (
    <div className='h-[400px] md:h-[316px] lg:h-[416px] xl:h-[518px] bg-black-500 shadow-lg p-2 lg:p-6 rounded-[12px]'>
      <ScrollArea className='h-full'>
        <div className='flex flex-col sm:flex-row sm:justify-between gap-2 sm:items-center p-3 rounded-md'>
          <div className='flex flex-row gap-3 items-center'>
            <div className='w-8 h-8 bg-[#D9D9D9] rounded-full shrink-0 ' />
            <div className='text-sm text-black-200'>
              Nguyễn Văn AAA Nguyễn Văn AAA 2 dòng{' '}
              <span className='text-primary-800'>đã đấu giá 7.500.000 VND</span>
            </div>
          </div>
          <div className='text-xs text-gray-400 shrink-0'>1 phút trước</div>
        </div>
        {Array.from({ length: 15 }).map((_, index) => (
          <div
            key={index}
            className='flex flex-col sm:flex-row sm:justify-between gap-2 sm:items-center p-3 rounded-md'
          >
            <div className='flex flex-row gap-3 items-center'>
              <div className='w-8 h-8 bg-[#D9D9D9] rounded-full shrink-0 ' />
              <div className='text-sm text-black-200'>
                Nguyễn Văn AAA{' '}
                <span className='text-primary-800'>
                  đã đấu giá 7.500.000 VND
                </span>
              </div>
            </div>
            <div className='text-xs text-gray-400 shrink-0'>1 phút trước</div>
          </div>
        ))}
        <ScrollBar orientation='vertical' />
      </ScrollArea>
    </div>
  )
}

export default AuctionLive
