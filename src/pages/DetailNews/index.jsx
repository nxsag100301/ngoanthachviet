import LoadingScreen from '@/components/LoadingScreen'
import { fetchNews } from '@/redux/actions/newActions'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

const DetailNews = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const [contentNews, setContentNews] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchDetailtNews = () => {
      setLoading(true)
      dispatch(
        fetchNews({
          body: {
            lang: 'vn',
            loai: 62,
            postid: id
          },
          onSuccess: (data) => {
            setContentNews(data.responses[0])
            setLoading(false)
          },
          onError: (err) => {
            console.log('err:', err)
            setLoading(false)
          }
        })
      )
    }
    fetchDetailtNews()
  }, [dispatch, id])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className='article-content'>
      <h1>{contentNews?.title}</h1>
      <h2>{contentNews?.summary}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html:
            contentNews?.articlecontent || '<p>Không tìm thấy nội dung</p>'
        }}
      ></div>
    </div>
  )
}

export default DetailNews
