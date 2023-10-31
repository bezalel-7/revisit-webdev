import { Navigate, Route } from 'react-router-dom'

export default function PrivateRoute({ isLogggedIn, children }) {
  if (isLogggedIn) {
    return children
  } else {
    // Redirect to the login page or any other route
    return <Navigate to="/login" />
  }
}
