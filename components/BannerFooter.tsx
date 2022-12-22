import Image from "next/image";

export default function BannerFooter() {
  return (
    <section className="flex justify-between relative bg-red-500 rounded-lg w-full lg:w-[70vw] p-6">
      <div className="capitalize text-white">
        <p className="text-lg">20% off</p>
        <h2 className="text-4xl my-4 md:text-7xl uppercase font-bold">
          fine
          <br />
          smile
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold">15 dec to 7 jan</h3>
        <br />
      </div>
      <div className="absolute top-0 bottom-0 right-[20%] md:right-[10vw] lg:right-[17vw]">
        {/* <Image
          src="/assets/headphones_a_2.webp"
          alt="banner"
          width={300}
          height={250}
          priority={true}
        /> */}
      </div>
      <div className="text-white text-start capitalize flex flex-col justify-center z-10">
        <h3 className="font-semibold">beats solo air</h3>
        <h2 className="font-bold text-2xl md:text-4xl mt-2">summer sale</h2>
        <p className="hidden">
          company that&apos;s grown from 270 to 480 employees in the last 12
          months
        </p>
        <button className="btn my-6 bg-white font-semibold text-red-500">
          shop now
        </button>
      </div>
    </section>
  );
}
