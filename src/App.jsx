import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './pages/HomePage/Home'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProductPage from './pages/ProductPage/ProductPage'
import NewsPage from './pages/NewsPage/NewsPage'
import AuctionPage from './pages/AuctionPage/AuctionPage'
import DetailProduct from './pages/DetailProduct/DetailProduct'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/auction' element={<AuctionPage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/products/:id' element={<DetailProduct />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer autoClose={1500} hideProgressBar={true} />
    </Router>
  )
}

export default App
