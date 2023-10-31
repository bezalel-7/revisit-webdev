import React, { useEffect, useState } from 'react'
import { apiUrl, filterData } from './data'
import NavBar from './components/NavBar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import { toast } from 'react-toastify'
import Spinner from './components/Spinner'

const App = () => {
  const [courses, setCourses] = useState(null)
  const [category, setCategory] = useState(filterData[0].title)
  const [loading, setLoading] = useState(true)

  async function fetchData() {
    setLoading(true)
    try {
      let response = await fetch(apiUrl)
      let output = await response.json()
      ///output ->
      setCourses(output.data)
    } catch (error) {
      toast.error('Network me koi dikkat hai')
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <NavBar />
      {filterData !== null && courses !== null ? (
        <>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </>
      ) : (
        <div>
          <h1>No Data Found</h1>
        </div>
      )}
      <div
        className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]"
      >
        {loading ? (
          <Spinner />
        ) : (
          <Cards courses={courses} category={category} />
        )}
      </div>
    </div>
  )
}

export default App
