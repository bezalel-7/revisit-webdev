import { useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner'
import { useEffect } from 'react'
import useGif from '../hooks/useGif'
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

export default function Tag() {
  // const [gif, setGif] = useState('')
  // const [loading, setLoading] = useState(false)
  const [tag, setTag] = useState('cat')
  // const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${input}`
  // async function fetchData() {
  //   setLoading(true)
  //   const data = await axios.get(url)
  //   const imageSource = data.data.data.images.downsized_large.url
  //   setGif(imageSource)
  //   setLoading(false)
  // }
  function changeHandler(event) {
    const { value } = event.target
    setTag(value)
  }

  const { gif, loading, fetchData } = useGif(tag)
  return (
    <div className="w-1/2  bg-blue-400 rounded-lg border border-black flex flex-col gap-y-5 mt-[15px] items-center">
      <h1 className="mt-[10px] text-3xl underline uppercase font-bold ">
        Random {tag} GIF
      </h1>
      {loading ? <Spinner /> : <img src={gif} width="450px" />}
      <input
        className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
        name="input"
        onChange={changeHandler}
        value={tag}
      ></input>
      <button
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px] "
        onClick={() => fetchData(tag)}
      >
        Generate
      </button>
    </div>
  )
}
