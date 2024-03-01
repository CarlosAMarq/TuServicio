import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const useUser = () => {
  const { currentUser, setCurrentUser } = useContext(GlobalContext);

  return { currentUser, setCurrentUser };
};
