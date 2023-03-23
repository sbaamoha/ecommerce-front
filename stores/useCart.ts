import { create } from "zustand";
interface ICart {
  cart: Item[] | [];
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

export const useCart = create<ICart>()((set) => ({
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  addToCart: (item) =>
    set((state) => {
      if (state.cart.length == 0) {
        state.cart = [{ ...item, qty: 1 }];
        localStorage.setItem("cart", JSON.stringify(state.cart));
        return {
          cart: state.cart,
        };
      }
      if (state.cart.some((curItem) => curItem._id === item._id)) {
        const newArr = state.cart?.map((cartItem) => {
          if (cartItem._id === item._id) {
            item.qty += 1;
          }
        });
        localStorage.setItem("cart", JSON.stringify(newArr));
        return {
          cart: newArr,
        };
      }
      localStorage.setItem(
        "cart",
        JSON.stringify([...state.cart, { ...item, qty: 1 }])
      );
      return {
        cart: [...state.cart, { ...item, qty: 1 }],
      };
    }),
  removeFromCart: (id) =>
    set((state) => {
      const newArr = state.cart.filter((currItem) => currItem._id !== id);
      localStorage.setItem("cart", JSON.stringify(newArr));
      return {
        cart: newArr,
      };
    }),
}));
