import { getCookie } from "cookies-next";
import { createContext, useState, useContext } from "react";

const initialVal = {
  username: JSON.stringify(getCookie("username")) || null,
  token: JSON.stringify(getCookie("token")) || null,
};

const AuthContext = createContext(initialVal);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [username, setUsername] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const loginUser = (props: any) => {
    setUsername(props.user);
    setToken(props.token);
  };
  const logoutUser = () => {
    setUsername(null);
    setToken(null);
  };
  const value = {
    username,
    setUsername,
    token,
    setToken,
    loginUser,
    logoutUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
