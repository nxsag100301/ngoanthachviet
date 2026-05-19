import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

import { getDetailIntroduction } from '@/apis/news'
import LoadingScreen from '@/components/LoadingScreen'

const DetailNews = () => {
  const { id } = useParams()

  const [news, setNews] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true)
        const res = await getDetailIntroduction({ ArticleID: id })
        if (res?.statusCodes === 200 && res?.metadata) {
          setNews(res?.metadata)
        }
      } catch (error) {
        console.log('Error fetch detail news: ', error)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [id])

  if (loading) return <LoadingScreen />

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
