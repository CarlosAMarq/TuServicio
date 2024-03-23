import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const useUser = () => {
  const { currentUser: user, setCurrentUser } = useContext(GlobalContext);

  const isLogin = () => {
    return user != null;
  };
  const logout = () => {
    localStorage.removeItem(user)
    setCurrentUser(null);
  };
  const login = ({ id, username, password, email, usertype }) => {
    localStorage.setItem('user', JSON.stringify({ id, username, password, email, usertype }));
    setCurrentUser({ id, username, password, email, usertype });
  };

  return { user, isLogin, logout, login };
};
