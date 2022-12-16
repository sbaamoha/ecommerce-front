import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Product() {
  return (
    <div className="w-full">
      <Link href="">
        <Image
          src="/images/earphones_a_1.webp"
          alt="product name"
          width={500}
          height={100}
          className="rounded-lg bg-gray-300"
        />
      </Link>
      <div className="p-3 shadow-lg rounded-lg">
        <Link href="">
          <h2 className="text-3xl font-black">headphones</h2>
        </Link>
        <p className="font-extralight mt-2">$49</p>
        <p className=" opacity-50">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse,
          similique!
        </p>
      </div>
    </div>
  );
}
