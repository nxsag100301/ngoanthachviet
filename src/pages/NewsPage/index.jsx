import moment from 'moment'
import ReactPaginate from 'react-paginate'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import NewsCard from '@/components/NewsCard'
import LoadingScreen from '@/components/LoadingScreen'
import { fetchNews } from '@/redux/actions/newActions'

const NewsPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  const [listNews, setListNews] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)

  const pageSize = 9

  useEffect(() => {
    const fetchListNews = () => {
      setLoading(true)
      dispatch(
        fetchNews({
          body: {
            SearchText: '',
            PageNumber: currentPage + 1,
            PageSize: pageSize,
            Status: 'Published'
          },
          onSuccess: (data) => {
            const items = data?.metadata?.Items || []
            const totalPages = data?.metadata?.TotalPages
            const totalItems = data?.metadata?.TotalCount
            const computedTotalPages = totalPages
              ? Number(totalPages)
              : Math.ceil(Number(totalItems) / pageSize)

            setListNews(items)
            setPageCount(
              Number.isFinite(computedTotalPages) ? computedTotalPages : 0
            )
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
  }, [dispatch, currentPage])

  const handlePageChange = (selectedItem) => {
    setCurrentPage(selectedItem.selected)
  }

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className='max-w-screen-2xl mx-auto px-6 lg:px-20 pt-9 pb-12'>
      <div className='uppercase font-penumbra font-bold text-xl sm:text-2xl md:text-3xl xl:text-4xl text-primary-600 mb-6'>
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
        {listNews?.length > 0 &&
          listNews.map((news) => (
            <NewsCard
              key={news.Id}
              image={`${import.meta.env.VITE_URL_IMAGE}${news.ImageUrl}`}
              title={news.Title}
              date={moment(news.CreatedAt).format('DD/MM/YYYY')}
              data={news}
            />
          ))}
      </div>
      {pageCount > 1 && (
        <div className='mt-8 flex justify-center'>
          <ReactPaginate
            breakLabel='...'
            nextLabel='Sau'
            previousLabel='Trước'
            onPageChange={handlePageChange}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            forcePage={currentPage}
            containerClassName='flex items-center gap-2 text-sm'
            pageClassName='rounded'
            pageLinkClassName='block rounded border border-gray-200 px-3 py-1 text-gray-700 hover:bg-gray-50'
            activeClassName='bg-primary-600 text-white border-primary-600'
            activeLinkClassName='text-white border-primary-600 bg-primary-600'
            previousClassName='rounded'
            previousLinkClassName='block rounded border border-gray-200 px-3 py-1 text-gray-700 hover:bg-gray-50'
            nextClassName='rounded'
            nextLinkClassName='block rounded border border-gray-200 px-3 py-1 text-gray-700 hover:bg-gray-50'
            breakClassName='px-2 text-gray-500'
            breakLinkClassName='text-gray-500'
            disabledClassName='opacity-50 cursor-not-allowed'
          />
        </div>
      )}
    </div>
  )
}

export default NewsPage
