import { HashRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { Provider } from 'react-redux'
import AppRoutes from './routes/AppRoutes'
import ButtonScrollToTop from './components/ButtonScrollToTop'
import { persistStore } from 'redux-persist'
import store from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const persistor = persistStore(store)

function App() {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ScrollToTop />
          <Navbar />
          <AppRoutes />
          <Footer />
          <ButtonScrollToTop />
          <ToastContainer autoClose={1000} hideProgressBar={true} />
        </PersistGate>
      </Provider>
    </Router>
  )
}

export default App
