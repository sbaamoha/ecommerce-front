import Image from "next/image";
import Link from "next/link";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function Product() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <Image
            src="/images/headphones_a_1.webp"
            alt="hed"
            width={500}
            height={500}
            className="bg-gray-100 hover:bg-red-500 cursor-pointer rounded-2xl"
          />
          <div className="flex gap-2 py-6">
            <Image
              src="/images/headphones_a_2.webp"
              alt="hed"
              width={100}
              height={100}
              className="bg-gray-100 hover:bg-red-500 cursor-pointer rounded-2xl"
            />
            <Image
              src="/images/headphones_a_1.webp"
              alt="hed"
              width={100}
              height={100}
              className="bg-gray-100 hover:bg-red-500 cursor-pointer rounded-2xl"
            />
            <Image
              src="/images/headphones_a_2.webp"
              alt="hed"
              width={100}
              height={100}
              className="bg-gray-100 hover:bg-red-500 cursor-pointer rounded-2xl"
            />
            <Image
              src="/images/headphones_a_1.webp"
              alt="hed"
              width={100}
              height={100}
              className="bg-gray-100 hover:bg-red-500 cursor-pointer rounded-2xl"
            />
          </div>
        </div>
        <div className="py-6">
          <h2 className="text-4xl font-bold capitalize">boat immortal 1000D</h2>
          <div className="flex py-6 items-center">
            {[1, 2, 3, 4].map(() => (
              <AiFillStar className="text-red-500" />
            ))}
            <AiOutlineStar />
            (40)
          </div>
          <p className="capitalize font-black">description:</p>
          <p className="capitalize py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis fugit exercitationem atque fuga eaque ad quis vel
            incidunt ut totam reprehenderit, doloribus magni, aspernatur non id
            rem sed, pariatur expedita enim. Debitis ut labore at ducimus, eos
            commodi vitae voluptatum beatae dolorum omnis accusantium inventore
            accusamus pariatur in odit molestiae.
          </p>
          <p className="text-red-500 font-bold">$50</p>
          <div className="flex items-center gap-2 py-6 capitalize font-black ">
            <p>quantity:</p>
            <div>
              <span className="p-2 border cursor-pointer text-red-500">-</span>
              <span className="p-2 border">0</span>
              <span className="p-2 border cursor-pointer text-green-500">
                +
              </span>
            </div>
          </div>
          <div className="flex gap-6">
            <Link href="">
              <button className="btn-outline transition-all">
                add to cart
              </button>
            </Link>
            <Link href="">
              <button className="btn-fill transition-all">buy now</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
