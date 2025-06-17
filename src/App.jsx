import { HashRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <ScrollToTop />
        <Navbar />
        <AppRoutes />
        <Footer />
        <ToastContainer autoClose={1000} hideProgressBar={true} />
      </Provider>
    </Router>
  )
}

export default App
