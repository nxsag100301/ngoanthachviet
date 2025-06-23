import { detailNews } from '@/mockData/news'
import React from 'react'
import { useParams } from 'react-router-dom'

const DetailNews = () => {
  const { id } = useParams()
  const content = detailNews.find((item) => item.id == id)
  return (
    <div
      className='article-content'
      dangerouslySetInnerHTML={{
        __html: content?.content || '<p>Không tìm thấy nội dung</p>'
      }}
    ></div>
  )
}

export default DetailNews
