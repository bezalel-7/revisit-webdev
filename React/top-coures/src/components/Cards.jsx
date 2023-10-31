import React from 'react'
import Card from './Card'
import { useState } from 'react'

export default function Cards(props) {
  const courses = props.courses
  const category = props.category
  const [likedCourses, setLikedCourses] = useState([])
  let CoursesList = []

  const getCourses = () => {
    if (category === 'All') {
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          CoursesList.push(course)
        })
      })
      return CoursesList
    } else {
      return courses[category]
    }
  }

  return (
    <div className="flex flex-row flex-wrap gap-2 mb-2 justify-center">
      {getCourses().map((course) => {
        return (
          <Card
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        )
      })}
    </div>
  )
}
