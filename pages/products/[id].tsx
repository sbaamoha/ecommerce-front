import { getCookie, setCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
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
  const [error, seterror] = useState("");
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  const token = JSON.stringify(getCookie("token"));
  const handleAddToCart = async () => {
    if (!token) {
      seterror("please Login so you can add to your cart");
      window.scrollTo(0, 0);
      return;
    }
    const request = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "cart", {
      method: "POST",
      //mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: JSON.stringify({ _id: product._id, quantity }),
    });
    const response = await request.json();
    if (!request.ok) {
      seterror(response);
    }
    if (request.ok) {
      setCookie("cart", response.items?.length);
      router.push("/cart");
    }
  };

  const { title, description, price, image, category } = product;
  return (
    <section className="py-24 px-6 md:px-12">
      {error.length > 0 ? (
        <h2 className="text-red-500 border-red-500 text-2xl uppercase py-2">
          {error}{" "}
          <Link className="underline text-blue-500" href="/signin">
            login
          </Link>
        </h2>
      ) : (
        ""
      )}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <Image
            src={image[0]}
            alt={title}
            width={500}
            height={500}
            className="bg-gray-100 hover:bg-red-500 cursor-pointer rounded-2xl"
          />
        </div>
        <div className="py-6">
          <h2 className="text-4xl font-bold capitalize">{title} </h2>
          <div className="flex py-6 items-center">
            {[1, 2, 3, 4].map((i) => (
              <AiFillStar key={i} className="text-red-500" />
            ))}
            <AiOutlineStar />
            (40)
          </div>
          <p className="capitalize font-black">description:</p>
          <p className="capitalize py-6">{description}</p>
          <p className="text-red-500 font-bold">${price} </p>
          <div className="flex items-center gap-2 py-6 capitalize font-black ">
            <p>quantity:</p>
            <div>
              <span
                onClick={() =>
                  setQuantity((prev) => (prev <= 1 ? prev : prev - 1))
                }
                className="p-2 border cursor-pointer text-red-500"
              >
                -
              </span>
              <span className="p-2 border">{quantity} </span>
              <span
                onClick={() =>
                  setQuantity((prev) => (prev > 9 ? prev : prev + 1))
                }
                className="p-2 border cursor-pointer text-green-500"
              >
                +
              </span>
            </div>
          </div>
          <div className="flex gap-6">
            <h3
              onClick={handleAddToCart}
              className="btn-outline cursor-pointer transition-all"
            >
              add to cart
            </h3>
            <h3 className="btn-fill cursor-pointer transition-all">buy now</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
interface ContextTypes {
  params: {
    id: string;
  };
}
export async function getServerSideProps(context: ContextTypes) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + `products/${context.params.id}`
  );
  const product = await response.json();
  return {
    props: { product },
  };
}

// interface ProductType {
//   _id: string;
//   title: string;
//   description: string;
//   price: number;
//   category: string;
//   image: string[];
// }
// export async function getStaticPaths() {
//   const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `products`);
//   const products = await response.json();
//   const path = products.map((product: ProductType) => ({
//     params: { _id: product._id },
//   }));
//   return {
//     props: { path, fallback: false },
//   };
// }
