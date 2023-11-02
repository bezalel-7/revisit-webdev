import { FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const cart = useSelector((state) => state.cart)
  return (
    <div>
      <nav className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto">
        <div>
          <NavLink to="/">
            <img
              className="ml-5"
              width={'60px'}
              height={'40px'}
              src="4968595.jpg"
            />
          </NavLink>
        </div>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <div className="relative">
            <NavLink to="/cart">
              <FaShoppingCart className="text-2xl" />

              {cart.length > 0 && (
                <span
                  className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex
               justify-center items-center animate-bounce rounded-full  text-white"
                >
                  {cart.length}
                </span>
              )}
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
