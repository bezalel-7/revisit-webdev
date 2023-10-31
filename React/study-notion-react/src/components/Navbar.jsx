import React from 'react'
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'
export default function Navbar(props) {
  let isLogggedIn = props.isLogggedIn
  let setIsLoggedIn = props.setIsLoggedIn

  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img src={logo} width={160} height={32} loading="lazy"></img>
      </Link>
      <nav>
        <ul className="flex flex-row gap-x-3 text-richblack-100">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-x-4 ">
        {!isLogggedIn && (
          <Link to="/login">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px]
             rounded-[8px] px-[12px] border border-richblack-700"
            >
              Log in
            </button>
          </Link>
        )}
        {!isLogggedIn && (
          <Link to="/signup">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px]
             rounded-[8px] px-[12px] border border-richblack-700"
            >
              Sign up
            </button>
          </Link>
        )}
        {isLogggedIn && (
          <Link to="/dashboard">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px]
             rounded-[8px] px-[12px] border border-richblack-700"
            >
              Dashboard
            </button>
          </Link>
        )}
        {isLogggedIn && (
          <Link to="/">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px]
             rounded-[8px] px-[12px] border border-richblack-700"
              onClick={() => {
                setIsLoggedIn(false)
                toast.success('Logged Out')
              }}
            >
              Log Out
            </button>
          </Link>
        )}
      </div>
    </div>
  )
}
