import React from 'react'
import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export default function LoginForm(props) {
  const setIsLoggedIn = props.setIsLoggedIn
  const Navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }
  function submitHandler(event) {
    event.preventDefault()
    console.log(event.target)
    setIsLoggedIn(true)
    toast.success('Login Successful')
    Navigate('/dashboard')
  }
  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-4 mt-6"
    >
      <label className="w-full">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Email Address<sup className="text-pink-200">*</sup>
        </p>
        <input
          type="email"
          required
          name="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter email id"
          className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full py-[8px] px-[12px] border border-richblack-700"
        />
      </label>
      <label className="w-full relative">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Password<sup className="text-pink-200">*</sup>
        </p>
        <input
          type={showPassword ? 'text' : 'password'}
          required
          name="password"
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter password"
          className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full py-[8px] px-[12px] border border-richblack-700"
        />
        <span
          className="absolute right-3 top-[38px] cursor-pointer text-richblack-5"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          )}
        </span>
        <Link to="#">
          <p className="text-xs mt-1 text-blue-100 w-full max-w-max ml-auto">
            Forgot Password?
          </p>
        </Link>
      </label>
      <button
        className="bg-yellow-50 rounded-[0.5rem] font-medium
        text-richblack-900 p-[12px] py-[8px] mt-3"
      >
        Sign In
      </button>
    </form>
  )
}
