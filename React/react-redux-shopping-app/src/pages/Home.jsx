import { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import Product from '../components/Product'
const Home = () => {
  const API_URL = 'https://fakestoreapi.com/products'

  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])

  async function fetchProductData() {
    setLoading(true)
    try {
      const response = await fetch(API_URL)
      const data = await response.json()
      console.log(data)
      setPosts(data)
    } catch (error) {
      console.log('error in Home.jsx')
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchProductData()
  }, [])
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div
          className="grid 
          xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
           max-w-6xl p-2 mx-auto space-y-10 space-x-5
           xs:gap-5 sm:gap-5 md:gap-5 lg:gap-4
        min-h-[80vh]"
        >
          {posts.map((post) => {
            return <Product key={post.id} post={post} />
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No Items present</p>
        </div>
      )}
    </div>
  )
}

export default Home
