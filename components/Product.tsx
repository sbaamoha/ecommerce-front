import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCart } from "../stores/useCart";
import { useAuth } from "../stores/useAuth";
interface PageProps {
  product: {
    _id: string;
    title: string;
    description: string;
    price: number;
    category: string;
    image: string[];
  };
}
export default function Product({ product }: PageProps) {
  const { addToCart } = useCart();
  const { username } = useAuth();
  useEffect(() => {
    AOS.init();
  }, []);
  const handleAddToCart = () => {
    if (username) {
      addToCart({ ...product, qty: 1 });
    } else {
      toast.error("Login Before Add To Cart");
    }
  };

  return (
    <div
      data-aos-delay="100"
      data-aos="zoom-in-down"
      className="w-full h-[100%] card"
    >
      <Link className="" href={`/products/${product._id}`}>
        <Image
          src={product.image[0]}
          alt={product.title}
          width={500}
          height={100}
          className="rounded bg-gray-300"
          priority
        />
      </Link>
      <div className="flex flex-col gap-2 py-6 px-2 shadow-lg rounded-sm">
        <h2 className="text-2xl">{product.title}</h2>
        <p className="text-sm text-red-400 font-bold">${product.price}</p>
        <div className="flex justify-end mt-2">
          <button
            onClick={handleAddToCart}
            className="btn bg-red-400 text-white hover:bg-red-300 transition-all"
          >
            add to cart
          </button>
        </div>
      </div>
      {/* <div className="p-3 shadow-lg rounded-lg">
        <Link href={`/products/${product._id}`}>
          <h2 className="text-3xl font-black">{product.title}</h2>
        </Link>
        <p className="font-extralight mt-2">${product.price}</p>
      </div> */}
    </div>
  );
}
