import LoadingScreen from '@/components/LoadingScreen'
import NewsCard from '@/components/NewsCard'
import { fetchNews } from '@/redux/actions/newActions'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const NewsPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  const [listNews, setListNews] = useState([])

  useEffect(() => {
    const fetchListNews = () => {
      setLoading(true)
      dispatch(
        fetchNews({
          body: {
            lang: 'vn',
            loai: 6,
            menuid: '1',
            soitem: '9',
            sotrang: '1'
          },
          onSuccess: (data) => {
            console.log('res:', data)
            setListNews(data.responses)
            setLoading(false)
          },
          onError: (err) => {
            console.log('err:', err)
            setLoading(false)
          }
        })
      )
    }
    fetchListNews()
  }, [dispatch])

  if (loading) {
    return <LoadingScreen />
  }

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
        {listNews.length > 0 &&
          listNews.map((news) => (
            <NewsCard
              key={news.id}
              image={`https://ngoanthachviet.com/ftp_images/${news.avatar}`}
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
