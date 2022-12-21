import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import Image from "next/image";

import Link from "next/link";

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
  //   console.log(response);
  useEffect(() => {
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
      }
    }
    fetchData();
  }, []);

  //   const removeFromCartHandler = async () => {};
  return (
    <section className="h-[90vh] px-6 md:pl-12  mt-28 flex flex-col lg:flex-row justify-between gap-10">
      <div className="capitalize">
        <ul className="flex flex-col md:flex-row justify-between md:gap-28 pb-3 border-b">
          <li>image</li>
          <li>title</li>
          <li>price</li>
          <li>quantity</li>
          <li>delete</li>
        </ul>
        {cart?.items.map((item) => (
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
            <h2 className="text-red-500 font-bold">${item.price} </h2>
            <h2>{item.quantity} </h2>
            <button className="btn bg-red-500 text-white">x</button>
          </ul>
        ))}
      </div>
      <div className="shadow-lg p-6  ">
        <h2 className="text-3xl font-bold uppercase text-center lg:text-left">
          checkout
        </h2>
        <div className="capitalize h-[70%] "></div>
        <p className="capitalize py-3">total: ${cart?.bill} </p>
        <button className="btn-outline">checkout</button>
      </div>
    </section>
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
