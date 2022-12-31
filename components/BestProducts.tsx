import { useMemo, useState } from "react";
import Product from "./Product";
interface HomeProps {
  products: {
    _id: string;
    title: string;
    description: string;
    price: number;
    category: string;
    image: string[];
  }[];
}
export default function BestProducts({ products }: HomeProps) {
  const [search, setSearch] = useState<string>("");
  const searchedData = useMemo(() => {
    if (!search) {
      return products;
    }
    return products.filter((item) =>
      item.title.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }, [search, products]);
  return (
    <section className="capitalize py-6 md:py-12">
      <div className="text-center py-12">
        <h2 className="font-black text-3xl md:text-5xl border-b pb-3 md:pb-8">
          best seller products
        </h2>
        <p className="opacity-40 mt-2">
          speaker there are many variations passages.
        </p>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-[90vw] my-6 p-2 border rounded-lg placeholder:text-gray-500"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* here map in the products */}
        {searchedData.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}
