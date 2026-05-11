import React from 'react'
import { useLocation } from 'react-router-dom'

const DetailNews = () => {
  const location = useLocation()

  const news = location?.state?.data

  return (
    <div className='article-content'>
      <h1>{news?.Title}</h1>
      <h2>{news?.ShortDescription}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: news?.Content || '<p>Không tìm thấy nội dung</p>'
        }}
      ></div>
    </div>
  )
}

export default DetailNews
