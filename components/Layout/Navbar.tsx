import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { hasCookie, getCookie, deleteCookie } from "cookies-next";
import { BsBag } from "react-icons/bs";
// component
export default function Navbar() {
  const router = useRouter();
  const [userConnected, setuserConnected] = useState(false);
  useEffect(() => {
    setuserConnected(hasCookie("token") && hasCookie("username"));
  }, [userConnected, router]);

  const username =
    userConnected && JSON.stringify(getCookie("username")).replaceAll('"', "");
  const token = JSON.stringify(getCookie("token"));

  // logout function
  const handleLogout = async () => {
    const request = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "user/logoutall",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    const response = await request.json();
    if (request.ok) {
      deleteCookie("token");
      deleteCookie("username");
      router.push("/");
      setuserConnected(false);
    }
    return response;
  };
  return (
    <header className="bg-transparent text-gray-600 shadow fixed top-0 w-full z-20 px-6 md:px-10 lg:px-12 py-6">
      <nav className="flex justify-between items-center capitalize">
        <div className="text-2xl lg:text-4xl">
          <Link href="/">phoenix</Link>
        </div>
        <div className="flex-1 flex justify-end mr-3">
          {userConnected ? (
            <div className="flex items-center gap-2">
              <h1 className="font-bold">{username}</h1>
              <button onClick={handleLogout} className="btn-nav">
                logout
              </button>
            </div>
          ) : (
            <div>
              <Link href="/signin">
                <button className="btn-nav">sign in</button>
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
            <div className="absolute top-[-15%] right-[-100%] w-6 h-6 bg-red-500 rounded-full text-center text-white">
              0
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
