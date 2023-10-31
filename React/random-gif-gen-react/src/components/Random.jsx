import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner'
import useGif from '../hooks/useGif'
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
export default function Random() {
  // const [gif, setGif] = useState('')
  // const [loading, setLoading] = useState(false)
  // const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
  // async function fetchData() {
  //   setLoading(true)
  //   const data = await axios.get(url)
  //   const imageSource = data.data.data.images.downsized_large.url
  //   setGif(imageSource)
  //   setLoading(false)
  // }
  // useEffect(() => {
  //   fetchData()
  // }, [])
  const { gif, loading, fetchData } = useGif()
  return (
    <div className="w-1/2  bg-green-400 rounded-lg border border-black flex flex-col gap-y-5 mt-[15px] items-center">
      <h1 className="mt-[10px] text-3xl underline uppercase font-bold ">
        Random Gif
      </h1>
      {loading ? <Spinner /> : <img src={gif} width="450px" />}

      <button
        className="w-10/12 bg-yellow-500 text-l py-2 rounded-lg mb-[20px] "
        onClick={() => fetchData()}
      >
        Generate
      </button>
    </div>
  )
}
