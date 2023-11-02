import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { addPost, removePost } from '../redux/Slices/cartSlice'

const Product = ({ post }) => {
  const [selected, setSelected] = useState(false)
  const { cart } = useSelector((state) => state)
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(addPost(post))
    toast.success('Item Added to cart')
  }

  const removeFromCart = () => {
    dispatch(removePost(post.id))
    toast.error('Item Removed from cart')
  }
  useEffect(() => {}, [cart])

  return (
    <div
      className="flex flex-col mt-10 items-center justify-between hover:scale-110 transition duration-200 ease-in
    shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] gap-3 p-4 ml-5 rounded-lg outline"
    >
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {post.description.split(' ').slice(0, 10).join(' ') + '...'}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={`${post.image}`} className="h-full w-full" />
      </div>
      <div className="flex justify-between gap-12">
        <div>
          <p className="text-green-600 font-semibold items-center w-full mt-5">
            ${post.price}
          </p>
        </div>
        {cart.some((p) => p.id === post.id) ? (
          <button
            className="mt-5 text-gray-700 border-2 border-gray-700 rounded-full text-[12px] p-1 px-3 uppercase
            hover:bg-gray-700 hover:text-white transition duration-200 ease-in-out"
            onClick={removeFromCart}
          >
            Remove item
          </button>
        ) : (
          <button
            className="mt-5 text-gray-700 border-2 border-gray-700 rounded-full text-[12px] p-1 px-3 uppercase
            hover:bg-gray-700 hover:text-white transition duration-200 ease-in-out"
            onClick={addToCart}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  )
}

export default Product
