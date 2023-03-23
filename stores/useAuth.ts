import {
  getCookie,
  deleteCookie,
  removeCookies,
  setCookie,
} from "cookies-next";
import { create } from "zustand";
interface IUser {
  username: string;
  token: string;
}

interface IAuth {
  username: string | null | boolean;
  token: string | null | boolean;
  setUser: (username: string, token: string) => void;
  removeUser: () => void;
}

export const useAuth = create<IAuth>()((set) => ({
  username: getCookie("username") || null,
  token: getCookie("token") || null,
  setUser: (username, token) =>
    set((state) => {
      setCookie("username", username);
      setCookie("token", `Bearer ${token}`);
      return {
        username,
        token,
      };
    }),
  removeUser: () =>
    set((state) => {
      deleteCookie("username");
      deleteCookie("token");
      return {
        username: null,
        token: null,
      };
    }),
}));
