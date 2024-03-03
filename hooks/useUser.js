import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const useUser = () => {
  const { currentUser: user, setCurrentUser } = useContext(GlobalContext);

  const isLogin = () => {
    return user != null;
  };
  const logout = () => {
    setCurrentUser(null);
  };
  const login = ({ id, username, password, email, userType }) => {
    setCurrentUser({ id, username, password, email, userType });
  };

  return { user, isLogin, logout, login };
};
