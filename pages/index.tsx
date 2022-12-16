import Head from "next/head";
import BannerFooter from "../components/BannerFooter";
import BannerHero from "../components/BannerHero";
import BestProducts from "../components/BestProducts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-6 md:px-10 lg:px-12 py-6 flex flex-col gap-20 items-center">
        <BannerHero />
        <BestProducts />
        <BannerFooter />
      </main>
    </>
  );
}
