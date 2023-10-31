import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { useState } from 'react'
import PrivateRoute from './components/PrivateRoute'

function App() {
  const [isLogggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar isLogggedIn={isLogggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/login"
          element={
            <Login isLogggedIn={isLogggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <Signup isLogggedIn={isLogggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isLogggedIn={isLogggedIn}>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  )
}

export default App
