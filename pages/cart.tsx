import Image from "next/image";
import { toast } from "react-toastify";
import Link from "next/link";
import { useCart } from "../stores/useCart";
import { useAuth } from "../stores/useAuth";
import dynamic from "next/dynamic";
interface CartTypes {
  _id: string;
  owner: string;
  items: {
    itemId: string;
    title: string;
    quantity: number;
    price: number;
    _id: string;
    image: string[];
  }[];
  bill: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
[];

function Cart() {
  const username = useAuth((state) => state.username);
  const { cart, removeFromCart } = useCart();
  const totalBill = useCart((state) => state.totalBill);
  const removeFromCartHandler = (id: string, title: string) => {
    removeFromCart(id);
    toast.warning(`${title} Item Has Removed From Your Cart`);
  };
  return (
    <div className="h-[100vh] mt-28 flex flex-col lg:flex-row lg:justify-between lg:gap-10">
      <div className={username ? `lg:flex-1 my-6` : `hidden`}>
        {cart && cart?.length !== 0 ? (
          <table className="capitalize w-[100%]">
            <caption className="font-black mb-3">your cart items</caption>
            <thead>
              <tr className="border">
                <th>image</th>
                <th>title</th>
                <th>price</th>
                <th>quantity</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((item) => (
                <tr key={item._id}>
                  <td>
                    <Image
                      src={item.image[0]}
                      alt={item.title}
                      width={50}
                      height={50}
                      className="bg-gray-200 rounded-md"
                      priority={true}
                    />
                  </td>
                  <td className="font-black">{item.title}</td>
                  <td className="text-red-500 font-bold">${item.price}</td>
                  <td>{item.qty}</td>
                  <td>
                    <a
                      onClick={() =>
                        removeFromCartHandler(item._id, item.title)
                      }
                      className="rounded-full px-2 hover:opacity-75 transition-opacity bg-red-500 text-white"
                    >
                      x
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="mt-6 capitalize text-center py-4">
            your cart is empty{" "}
            <Link className="text-blue-500" href="/">
              shop now
            </Link>
          </div>
        )}
      </div>
      <div className={username ? `shadow-lg p-6 h-[50%]` : `hidden`}>
        <h2 className="text-3xl border-b pb-6 font-bold uppercase text-center lg:text-left">
          checkout
        </h2>
        <div className="capitalize h-[30vh] flex flex-col justify-end items-center">
          <div className="capitalize py-3 font-bold ">
            total: <p className="text-red-500">${totalBill} </p>
          </div>
          <button className="btn-outline">checkout</button>
        </div>
      </div>
      <div
        className={
          !username
            ? `flex flex-col md:flex-row h-[80vh] mt-28 capitalize text-2xl md:text-4xl text-red-500`
            : `hidden`
        }
      >
        please login to see your cart{" "}
        <Link className="text-blue-500 underline px-2" href="/signin">
          here
        </Link>
      </div>
    </div>
  );
}
export default dynamic(() => Promise.resolve(Cart), { ssr: false });
