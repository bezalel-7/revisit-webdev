import React from 'react'
import { removePost } from '../redux/Slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { AiFillDelete } from 'react-icons/ai'
// import
const CartItem = ({ item }) => {
  const { cart } = useSelector((state) => state)
  const dispatch = useDispatch()

  const removeItemFromCart = () => {
    dispatch(removePost(item.id))
    toast.error('Item Removed from cart')
  }

  return (
    <>
      <div className="flex items-center p-5 justify-between mt-2 mb-2 rounded-xl border-b-4">
        <div className="flex p-3">
          <img src={item.image} className="h-28 rounded-lg" alt="" />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-purple-700 font-semibold">
              {item.title}
            </h1>
            <p>${item.price}</p>
          </div>
        </div>
        <div
          onClick={removeItemFromCart}
          className="bg-purple-300 hover:bg-purple-100 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
        >
          <AiFillDelete className="black text-xl" />
        </div>
      </div>
    </>
  )
}

export default CartItem
