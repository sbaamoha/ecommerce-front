import Image from "next/image";
import Link from "next/link";
import { BsBag } from "react-icons/bs";
export default function Navbar() {
  return (
    <header className="bg-gray-300 shadow fixed top-0 w-full z-20 px-6 md:px-10 lg:px-12 py-6">
      <nav className="flex justify-between items-center capitalize">
        <div className="text-4xl">
          <Link href="/">phoenix</Link>
        </div>
        <div className="flex-1 flex justify-end mr-3">
          <Link href="/signin">
            <button className="btn-nav">sign in</button>
          </Link>
          <Link href="/signup">
            <button className="btn-nav">sign up</button>
          </Link>
        </div>
        <div className="w-5 relative">
          <Link href="">
            <BsBag className="text-3xl cursor-pointer" />
            <div className="absolute top-[-15%] right-[-100%] w-6 h-6 bg-red-500 rounded-full text-center text-white">
              0
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
