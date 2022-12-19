import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../../redux/reducers/user";

import { RootState } from "../../redux/store";
import { BsBag } from "react-icons/bs";
export default function Navbar() {
  const [user, setUser] = useState("");
  const username = useSelector((state: RootState) => state.userData.username);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   username.length > 0 && localStorage.setItem("user", username);
  //   const thereareuser =
  //     JSON.stringify(localStorage.getItem("user")).length > 0;
  //   setUser(thereareuser ? JSON.stringify(localStorage.getItem("user")) : "");
  // }, [user]);

  const handleLogout = async () => {
    const request = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "user/logoutall",
      {
        method: "POST",
        headers: {
          Authorization: `Beareer${" "}${localStorage.getItem("token")}`,
        },
      }
    );
    const response = await request.json();
    if (request.ok) {
      dispatch(logoutUser());
    }
  };
  return (
    <header className="bg-transparent text-gray-600 shadow fixed top-0 w-full z-20 px-6 md:px-10 lg:px-12 py-6">
      <nav className="flex justify-between items-center capitalize">
        <div className="text-2xl lg:text-4xl">
          <Link href="/">phoenix</Link>
        </div>
        <div className="flex-1 flex justify-end mr-3">
          {username.length > 0 ? (
            <div className="flex items-center gap-2">
              <h1 className="font-bold">{username}</h1>
              <button onClick={handleLogout} className="btn-nav">
                logout
              </button>
            </div>
          ) : (
            <>
              <Link href="/signin">
                <button className="btn-nav">sign in</button>
              </Link>
              <Link href="/signup">
                <button className="btn-nav">sign up</button>
              </Link>
            </>
          )}
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
