import React from 'react'
import { NavLink } from 'react-router-dom'

export default function BlogDetails({ post }) {
  return (
    <div className="w-11/12 max-w-2xl mx-auto">
      <NavLink to={`/blog/${post.id}`}>
        <span className="font-bold text-lg text-amber-900">{post.title}</span>
      </NavLink>
      <p>
        By <span className="italic">{post.author}</span> on{' '}
        <NavLink to={`/categories/${post.category.replaceAll(' ', '-')}`}>
          <span className="font-semibold underline cursor-pointer">
            {post.category}
          </span>
        </NavLink>
      </p>
      <p>Posted on {post.date}</p>
      <p>{post.content}</p>
      <div>
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll()}`}>
            <span className="text-md font-semibold underline text-blue-700 cursor-pointer">{`#${tag} `}</span>
          </NavLink>
        ))}
      </div>
    </div>
  )
}
