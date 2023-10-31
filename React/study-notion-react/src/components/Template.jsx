import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import frameImage from '../assets/frame.png'
import { FcGoogle } from 'react-icons/fc'
export default function Template({
  title,
  desc1,
  desc2,
  image,
  formtype,
  setIsLoggedIn,
  isLogggedIn,
}) {
  return (
    <div className="flex justify-between flex-row w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0">
      <div className="w-11/12 max-w-[450px]">
        <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
          {title}
        </h1>
        <p className="text-[1.135rem] leading-[1.625rem] mt-4">
          <span className="text-richblack-100 ">{desc1}</span>
          <br />
          <span className="text-blue-100 italic">{desc2}</span>
        </p>
        {formtype === 'signup' ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}
        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="w-full h-[1px] bg-richblack-700"></div>
          <p className="text-richblack-700 font-medium leading-[1.375rem]">
            OR
          </p>
          <div className="w-full h-[1px] bg-richblack-700"></div>
        </div>

        <button
          className="w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
         border-richblack-700 px-[12px] border py-[8px] mt-6 gap-x-2"
        >
          <FcGoogle />
          <p>Signup with Google</p>
        </button>
      </div>

      <div className="relative w-11/12 max-w-[450px]">
        <img
          src={frameImage}
          alt="frame"
          width={558}
          height={504}
          loading="lazy"
        />
        <img
          src={image}
          alt="Students"
          width={558}
          height={490}
          loading="lazy"
          className="absolute -top-4 right-4"
        />
      </div>
    </div>
  )
}
