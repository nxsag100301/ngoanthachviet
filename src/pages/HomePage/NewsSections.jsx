import NewsCard from '@/components/NewsCard'
import NewsCardForHomePage from '@/components/NewsCardForHomePage'
import { newsHomePage } from '@/mockData/news'
import React from 'react'

const NewsSections = () => {
  return (
    <div className='bg-[#FDFDFD]'>
      <div className='max-w-screen-2xl mx-auto py-3 lg:py-12 px-6 lg:px-20'>
        <div className='uppercase font-penumbra font-bold text-2xl sm:text-4xl text-primary-600 mb-6 lg:mb-14 text-center lg:text-start'>
          Tin tức
        </div>
        <div className='flex flex-col md:flex-row md:flex-wrap justify-center lg:grid lg:grid-cols-3 gap-6 xl:gap-[56px] mb-6'>
          {newsHomePage.length > 0 &&
            newsHomePage.map((news) => (
              <NewsCardForHomePage
                key={news.id}
                image={`https://brandname.phuckhangnet.vn/ftp_images/${news.avatar}`}
                title={news.title}
                date={news.createdate.split(' ')[0]}
                id={news.id}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default NewsSections
