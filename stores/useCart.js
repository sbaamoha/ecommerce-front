import { getCookie, setCookie } from "cookies-next";
import { create } from "zustand";

const totalPrice = (array) => {
  const total = array.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
  return total;
};
const cart = getCookie("cart") ? JSON.parse(getCookie("cart")) : [];

export const useCart = create((set) => ({
  cart: getCookie("cart") ? JSON.parse(getCookie("cart")) : [],
  totalBill: totalPrice(cart),
  addToCart: (item) =>
    set((state) => {
      if (state.cart.length == 0) {
        if (item.qty) {
          state.cart = [item];
        } else {
          state.cart = [{ ...item, qty: 1 }];
        }
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
            currItem.qty += 1;
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
          cart: [...state.cart, { ...item, qty: 1 }],
          totalBill: totalPrice([...state.cart, { ...item, qty: 1 }]),
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
