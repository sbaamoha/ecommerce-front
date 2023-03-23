import Link from "next/link";
import { BsBag } from "react-icons/bs";
import axiosClient from "../../axios/axiosConfig";
import { useAuth } from "../../stores/useAuth";
import { useCart } from "../../stores/useCart";
export default function Navbar() {
  const removeUser = useAuth((state) => state.removeUser);
  const user = useAuth((state) => state.username);
  const cart = useCart((state) => state.cart);
  // logout function
  const handleLogout = async () => {
    axiosClient
      .post("user/logoutall")
      .then((response) => {
        removeUser();
      })
      .catch((err) => {});
  };

  return (
    <header className="bg-transparent text-gray-600 shadow fixed top-0 w-full z-20 px-6 md:px-10 lg:px-12 py-6">
      <nav className="flex justify-between items-center capitalize">
        <div className="text-lg lg:text-4xl">
          <Link href="/">sba e-comm</Link>
        </div>
        <div className="flex-1 flex justify-end mr-3">
          {user ? (
            <div className="flex items-center gap-2">
              <h1 className="font-bold">{user}</h1>
              <button onClick={() => handleLogout()} className="btn-nav">
                logout
              </button>
            </div>
          ) : (
            <div>
              <Link href="/signin">
                <button className="btn-nav">login</button>
              </Link>
              <Link href="/signup">
                <button className="btn-nav">sign up</button>
              </Link>
            </div>
          )}
        </div>
        <div className="w-5 relative">
          <Link href="/cart">
            <BsBag className="text-3xl cursor-pointer" />
            <p className="absolute top-[-15%] right-[-100%] w-6 h-6 bg-red-500 rounded-full text-center text-white">
              {cart.length}
            </p>
          </Link>
        </div>
      </nav>
    </header>
  );
}
