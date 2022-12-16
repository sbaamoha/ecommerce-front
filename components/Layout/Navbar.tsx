import Image from "next/image";
import { BsBag } from "react-icons/bs";
export default function Navbar() {
  return (
    <header className="px-6 md:px-10 lg:px-12 py-6">
      <nav className="flex justify-between items-center capitalize">
        <div className="text-4xl">
          <h1>phoenix</h1>
        </div>
        <div className="w-5 relative">
          <BsBag className="text-3xl cursor-pointer" />
          <div className="absolute top-[-15%] right-[-100%] w-6 h-6 bg-red-500 rounded-full text-center text-white">
            0
          </div>
        </div>
      </nav>
    </header>
  );
}
