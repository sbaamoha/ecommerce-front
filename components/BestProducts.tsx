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
  return (
    <section className="capitalize py-6 md:py-12">
      <div className="text-center py-12">
        <h2 className="font-black text-3xl md:text-5xl border-b pb-3 md:pb-8">
          best seller products
        </h2>
        <p className="opacity-40 mt-2">
          speaker there are many variations passages
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* here map in the products */}
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}
