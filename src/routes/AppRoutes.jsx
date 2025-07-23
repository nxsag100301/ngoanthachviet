import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/HomePage'
import NotFound from '@/pages/NotFound'
import ProductPage from '@/pages/ProductPage'
import NewsPage from '@/pages/NewsPage'
import AuctionPage from '@/pages/AuctionPage'
import DetailProduct from '@/pages/DetailProduct'
import PrivateRoute from './PrivateRoute'
import DetailNews from '@/pages/DetailNews'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<ProductPage />} />
      <Route path='/auction' element={<AuctionPage />} />
      <Route path='/news' element={<NewsPage />} />
      <Route path='/products/:id' element={<DetailProduct />} />
      <Route path='/news/:id' element={<DetailNews />} />
      <Route path='*' element={<NotFound />} />
      <Route element={<PrivateRoute />}>
        {/* Thêm private route vào đây */}
      </Route>
    </Routes>
  )
}

export default AppRoutes
