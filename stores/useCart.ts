import { getCookie, setCookie } from "cookies-next";
import { create } from "zustand";
interface ICart {
  cart: Item[] | [];
  totalBill: number;
  addToCart: (item: Item) => void;
  removeFromCart: (id: string) => void;
}

export interface Item {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string[];
  qty: number;
}
const totalPrice = (array: Item[]) => {
  const total = array.reduce(
    (acc: number, curr: Item) => acc + curr.price * curr.qty,
    0
  );
  return total;
};
const cart = (): Item[] | [] =>
  getCookie("cart") ? JSON.parse(JSON.stringify(getCookie("cart"))) : [];

export const useCart = create<ICart>()((set) => ({
  cart: cart(),
  totalBill: totalPrice(cart()),
  addToCart: (item) =>
    set((state) => {
      if (state.cart.length == 0) {
        state.cart = [item];
        setCookie("cart", JSON.stringify(state.cart));
        return {
          cart: state.cart,
          totalBill: totalPrice(state.cart),
        };
      }
      const duplicatedItem = state.cart.find(
        (cartItem) => cartItem._id === item._id
      );
      if (duplicatedItem !== undefined) {
        const newArr = state.cart.map((currItem) => {
          if (currItem._id === duplicatedItem._id) {
            currItem.qty += item.qty;
          }
          return currItem;
        });
        setCookie("cart", JSON.stringify(newArr));

        return {
          cart: newArr,
          totalBill: totalPrice([...state.cart, duplicatedItem]),
        };
      } else {
        setCookie("cart", JSON.stringify([...state.cart, { ...item, qty: 1 }]));
        return {
          cart: [...state.cart, item],
          totalBill: totalPrice([...state.cart, item]),
        };
      }
      // setCookie("cart", JSON.stringify([...state.cart, { ...item, qty: 1 }]));
    }),
  removeFromCart: (id) =>
    set((state) => {
      const newArr = state.cart.filter((currItem) => currItem._id !== id);
      setCookie("cart", JSON.stringify(newArr));
      return {
        cart: newArr,
        totalBill: totalPrice(newArr),
      };
    }),
}));
