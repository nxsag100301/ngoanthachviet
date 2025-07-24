import { detailNews } from '@/mockData/news'
import { fetchNews } from '@/redux/actions/newActions'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

const DetailNews = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const [contentNews, setContentNews] = useState(null)

  const content = detailNews.find((item) => item.id == id)

  useEffect(() => {
    const fetchDetailtNews = () => {
      dispatch(
        fetchNews({
          body: {
            lang: 'vn',
            loai: 62,
            postid: id
          },
          onSuccess: (data) => {
            console.log('res:', data)
            setContentNews(data.responses[0])
          },
          onError: (err) => {
            console.log('err:', err)
          }
        })
      )
    }
    fetchDetailtNews()
  }, [dispatch, id])

  return (
    <div>
      <h1 className='article-content'>{contentNews?.title}</h1>
      <h2 className='article-content'>{contentNews?.summary}</h2>
      <div
        className='article-content'
        dangerouslySetInnerHTML={{
          __html:
            contentNews?.articlecontent || '<p>Không tìm thấy nội dung</p>'
        }}
      ></div>
    </div>
  )
}

export default DetailNews
