import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axiosClient from "../axios/axiosConfig";
import { useAuth } from "../stores/useAuth";
import { useCart } from "../stores/useCart";

export default function Signin() {
  // const user = useAuth(state => state.user)
  const setUser = useAuth((state) => state.setUser);
  let router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axiosClient
      .post("user/login", { email, password })
      .then((response) => {
        if (response.data.token !== undefined) {
          setUser(response.data.username, response.data.token);
        }
        router.push("/");
      })
      .catch((err) => setError(err));
  };

  return (
    <section className="flex items-center justify-center h-[100vh] my-12">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p> */}
        </div>
        <div className="flex flex-col gap-10">
          <div className="capitalize text-red-500">
            {error.length > 0 && error}
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <Link
            href="#"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            Forgot Password?
          </Link>
        </div>
      </form>
    </section>
  );
}
