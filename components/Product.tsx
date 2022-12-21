import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos-delay="100" data-aos="zoom-in-down" className="w-full">
      <Link href={`/products/${product._id}`}>
        <Image
          src={product.image[0]}
          alt={product.title}
          width={500}
          height={100}
          className="rounded bg-gray-300"
        />
      </Link>
      <div className="p-3 shadow-lg rounded-lg">
        <Link href={`/products/${product._id}`}>
          <h2 className="text-3xl font-black">{product.title}</h2>
        </Link>
        <p className="font-extralight mt-2">${product.price}</p>
      </div>
    </div>
  );
}
