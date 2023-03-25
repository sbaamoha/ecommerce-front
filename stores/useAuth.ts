import Cookies from "js-cookie";
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
  username: Cookies.get("username") || null,
  token: Cookies.get("token") || null,
  setUser: (username, token) =>
    set((state) => {
      Cookies.set("username", username);
      Cookies.set("token", `Bearer ${token}`);
      return {
        username,
        token,
      };
    }),
  removeUser: () =>
    set((state) => {
      Cookies.remove("username");
      Cookies.remove("token");
      return {
        username: null,
        token: null,
      };
    }),
}));
