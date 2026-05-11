import moment from 'moment'
import { useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'

import { fetchNews } from '@/redux/actions/newActions'
import NewsCardForHomePage from './NewsCardForHomePage'

const NewsSections = () => {
  const dispatch = useDispatch()

  const [listNews, setListNews] = useState([])

  useEffect(() => {
    const fetchListNews = () => {
      dispatch(
        fetchNews({
          body: {
            SearchText: '',
            PageNumber: 1,
            PageSize: 3,
            Status: 'Published'
          },
          onSuccess: (data) => {
            setListNews(data?.metadata?.Items)
          },
          onError: (err) => {
            console.log('err:', err)
          }
        })
      )
    }
    fetchListNews()
  }, [dispatch])

  return (
    <div className='bg-[#FDFDFD]'>
      <div className='max-w-screen-2xl mx-auto py-3 lg:py-12 px-6 lg:px-20'>
        <div className='uppercase font-penumbra font-bold text-2xl sm:text-4xl text-primary-600 mb-6 lg:mb-14 text-center lg:text-start'>
          Tin tức
        </div>
        <div className='flex flex-col md:flex-row md:flex-wrap justify-center lg:grid lg:grid-cols-3 gap-6 xl:gap-[56px] mb-6'>
          {listNews?.length > 0 &&
            listNews.map((news) => (
              <NewsCardForHomePage
                key={news.Id}
                image={`${import.meta.env.VITE_URL_IMAGE}${news.ImageUrl}`}
                title={news.Title}
                date={moment(news.CreatedAt).format('DD/MM/YYYY')}
                data={news}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default NewsSections
