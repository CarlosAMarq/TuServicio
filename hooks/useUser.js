import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

import Cookies from "js-cookie";

export const useUser = () => {
  const { currentSesion, setCurrentSesion, isUserLoading, setIsUserLoading } = useContext(GlobalContext);

  const isLogin = () => {
    return currentSesion != null;
  };
  const logout = () => {
    Cookies.remove('auth');
    setCurrentSesion(null);
  };
  const login = (data) => {
    // localStorage.setItem('user', JSON.stringify({ id, username, password, email, usertype }));
    Cookies.set('auth', data.token);
    setCurrentSesion(data);
  };

  return { user: currentSesion?.user, isLogin, logout, login, isUserLoading, setIsUserLoading };
};
