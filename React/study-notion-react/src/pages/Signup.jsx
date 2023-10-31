import React from 'react'
import Template from '../components/Template'
import SignupImage from '../assets/signup.png'
export default function Signup({ setIsLoggedIn }) {
  return (
    <Template
      title="Welcome Back!"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career"
      image={SignupImage}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}
