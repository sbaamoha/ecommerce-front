import { getCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";

interface CartTypes {
  response: {
    cart: {
      _id: string;
      owner: string;
      items: {
        itemId: string;
        title?: string;
        quantity: number;
        price: number;
        _id: string;
      }[];
      bill: number;
      createdAt: string;
      updatedAt: string;
      __v: number;
    }[];
  };
}

export default function ({ response }: CartTypes) {
  //   console.log(response);
  const removeFromCartHandler = async () => {};
  return (
    <section className="h-[90vh] flex items-center ">
      <div>
        {/* <ul>
          {cart.items.map((item) => (
            <li key={item.}>
              <div className="row">
                <div>
                  <Image src={""} alt={""} className="small" />
                </div>
                <div className="min-30">
                  <Link href={"#"}>{item}</Link>
                </div>
                <div>
                  <select value={item}>
                    <option key="s" value="s"></option>
                  </select>
                </div>
                <div>${item}</div>
                <div>
                  <button
                    type="button"
                    onClick={() => removeFromCartHandler(item)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul> */}
      </div>
    </section>
  );
}
export async function getServerSideProps() {
  //   const token = JSON.stringify(getCookie("token"));
  //   console.log(token);
  const request = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "cart", {
    credentials: "include",
    mode: "cors",
  });
  const response = await request.json();
  return {
    props: { response },
  };
}
