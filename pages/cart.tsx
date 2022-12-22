import { getCookie, hasCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";
import Image from "next/image";

import Link from "next/link";
import { useRouter } from "next/router";

interface CartTypes {
  _id: string;
  owner: string;
  items: {
    itemId: string;
    title: string;
    quantity: number;
    price: number;
    _id: string;
    image: string[];
  }[];
  bill: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
[];

export default function Cart() {
  const [cart, setCart] = useState<CartTypes>();
  const [error, setError] = useState();
  const [username, setUsername] = useState<string | boolean>();
  const router = useRouter();
  //   console.log(response);
  useEffect(() => {
    setUsername(hasCookie("username") && JSON.stringify(getCookie("username")));

    const token = JSON.stringify(getCookie("token"));
    async function fetchData() {
      const request = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "cart", {
        headers: {
          Authorization: token,
        },
      });
      const response = await request.json();
      if (request.ok) {
        setCart(response.cart[0]);
        setCookie("cart", cart ? cart?.items.length : 0);
      }
    }
    if (!token) {
      return;
    }
    fetchData();
  }, [router, cart]);

  const removeFromCartHandler = async (id: string) => {
    const token = JSON.stringify(getCookie("token"));

    const request = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + `cart/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }
    );
    const response = await request.json();

    if (!request.ok) {
      setError(response);
    }
    if (request.ok) {
      router.push("/cart");
    }
  };
  return (
    <>
      {username ? (
        <section className="h-[100vh] px-6 md:pl-12  mt-28 flex flex-col lg:flex-row lg:justify-between gap-10">
          <div className="capitalize">
            {error ? <h2>{error} </h2> : ""}
            <ul className="flex md:flex-row justify-between md:gap-28 pb-3 border-b">
              <li>image</li>
              <li>title</li>
              <li>price</li>
              <li>quantity</li>
              <li>delete</li>
            </ul>
            {cart?.items.length !== 0 ? (
              cart?.items.map((item) => (
                <ul
                  key={item._id}
                  className="py-3 flex justify-between md:gap-28 border-b "
                >
                  <Image
                    src={item.image[0]}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="bg-gray-400 rounded-lg"
                  />
                  <h2 className="font-black">{item.title} </h2>
                  <h2 className="text-red-500 font-bold">${item.price}</h2>
                  <h2>{item.quantity}</h2>
                  <button
                    onClick={() => removeFromCartHandler(item.itemId)}
                    className="btn h-9 bg-red-500 text-white"
                  >
                    x
                  </button>
                </ul>
              ))
            ) : (
              <div className="mt-6">
                your cart is empty{" "}
                <Link className="text-blue-500" href="/">
                  shop now
                </Link>{" "}
              </div>
            )}
          </div>
          <div className="shadow-lg p-6 h-[100%] ">
            <h2 className="text-3xl font-bold uppercase text-center lg:text-left">
              checkout
            </h2>
            <div className="capitalize h-[40%] md:h-[70%] "></div>
            <p className="capitalize py-3">total: ${cart?.bill} </p>
            <button className="btn-outline">checkout</button>
          </div>
        </section>
      ) : (
        <div className="flex flex-col md:flex-row h-[80vh] mt-28 capitalize text-2xl md:text-4xl text-red-500">
          please login to see your cart{" "}
          <Link className="text-blue-500 underline" href="/signin">
            here
          </Link>
        </div>
      )}
    </>
  );
}
// export async function getServerSideProps() {
//   //   const token = JSON.stringify(getCookie("token"));
//   //   console.log(token);
//   const request = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "cart", {
//     credentials: "include",
//     mode: "cors",
//   });
//   const response = await request.json();
//   return {
//     props: { response },
//   };
// }
