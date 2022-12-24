import Image from "next/image";

export default function BannerHero() {
  return (
    <section className="flex relative bg-gray-400 rounded-lg mt-28 w-full lg:w-[70vw] p-6">
      <div className="capitalize">
        <p className="text-lg">beats solo</p>
        <h3 className="text-2xl md:text-4xl font-bold">wireless</h3>
        <h2 className="text-4xl md:text-7xl text-white uppercase font-bold">
          headphones
        </h2>
        <br />
        <button className="btn z-10 text-white bg-red-500">
          shop wireless headphone
        </button>
      </div>
      <div className="absolute top-0 bottom-0 right-[-10vw] md:right-[10vw] lg:right-[17vw]">
        {/* <Image
          src="/assets/headphones_a_1.webp"
          alt="banner"
          width={300}
          height={250}
          priority={true}
        /> */}
      </div>
      <div className="hidden lg:block w-[15vw] absolute bottom-0 right-3 capitalize">
        <h3 className="text-right font-semibold">description</h3>
        <p className="font-sans opacity-40 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          distinctio.
        </p>
      </div>
    </section>
  );
}
