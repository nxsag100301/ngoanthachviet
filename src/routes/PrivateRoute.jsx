import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const isAuthenticated = false
  return <>{isAuthenticated ? <Outlet /> : <Navigate to='/' replace />}</>
}

export default PrivateRoute
