import React, { createContext, useEffect, useState } from "react";
import accounts from "../mocks/accounts.json";
import Cookies from "js-cookie";
export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
  const [currentSesion, setCurrentSesion] = useState(null);
  const [isUserLoading, setIsUserLoading] = useState(false)


  useEffect(() => {
    const auth = async () => {
      const token = Cookies.get("auth");
      if (token) {
        setIsUserLoading(true);
        const response = await fetch(
          "https://tu-servicio.onrender.com/profile",
          {
            headers: {
              Authorization: `Token ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status == 200) {
          const user = await response.json();
          if (user) {
            setCurrentSesion({ user, token });
          }
        }
      }
      setIsUserLoading(false);
    };

    auth();
  }, []);

  return (
    <GlobalContext.Provider value={{ currentSesion, setCurrentSesion, isUserLoading, setIsUserLoading }}>
      {children}
    </GlobalContext.Provider>
  );
}
