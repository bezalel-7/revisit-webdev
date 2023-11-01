import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
export default function TagPage() {
  const Navigation = useNavigate()
  const location = useLocation()
  const tag = location.pathname.split('/').at(-1).replaceAll('-', ' ')
  return (
    <div className="w-11/12 max-w-2xl mx-auto mt-[5rem]">
      <Header />
      <div className="w-11/12 max-w-2xl mx-auto">
        <button
          className="border-2 py-1 bg-black text-white px-4 rounded-md"
          onClick={() => Navigation(-1)}
        >
          back
        </button>
        <h2 className="font-bold text-2xl">
          Blogs Tagged <span className="text-blue-700 underline">#{tag}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  )
}
