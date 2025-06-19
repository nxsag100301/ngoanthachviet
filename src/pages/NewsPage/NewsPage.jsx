import NewsCard from '@/components/NewsCard'
import { newsPage } from '@/mockData/news'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NewsPage = () => {
  const navigate = useNavigate()
  return (
    <div className='max-w-screen-2xl mx-auto px-6 lg:px-20 pt-9 pb-12'>
      <div className='uppercase font-penumbra font-bold text-2xl sm:text-4xl text-primary-600 mb-6'>
        Tin tức
      </div>
      <div className='flex flex-row gap-2 items-center text-lg mb-6'>
        <span
          onClick={() => navigate('/')}
          className='cursor-pointer text-primary-600'
        >
          Trang chủ
        </span>
        <img src='/assets/icons/right-triangle.png' className='w-4 h-4' />
        <span className='text-gray-400 select-none'>Tin tức</span>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
        {newsPage.length > 0 &&
          newsPage.map((news) => (
            <NewsCard
              key={news.id}
              image={`https://brandname.phuckhangnet.vn/ftp_images/${news.avatar}`}
              title={news.title}
              date={news.createdate.split(' ')[0]}
              id={news.id}
            />
          ))}
      </div>
    </div>
  )
}

export default NewsPage
