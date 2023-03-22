import { getCookie, setCookie } from "cookies-next";
import { create } from "zustand";
interface IUser {
  username: string;
  token: string;
}

interface IAuth {
  user: IUser | null;
  setUser: (user: IUser) => void;
}

export const useAuth = create<IAuth>()((set) => ({
  user: getCookie("user") ? JSON.parse(getCookie("user")) : null,
  setUser: (user) =>
    set((state) => {
      setCookie("user", user);
      return {
        user,
      };
    }),
}));
