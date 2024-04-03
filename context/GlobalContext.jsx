import React, { createContext, useEffect, useState } from "react";
import accounts from "../mocks/accounts.json";
import Cookies from "js-cookie";
import { API_URL } from "../global.config";
export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
  const [currentSesion, setCurrentSesion] = useState(null);
  const [isUserLoading, setIsUserLoading] = useState(false);
  const [messages, setMessages] = useState(false);
  let componentLoaded = false;

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
            const messageResponse = await fetch(API_URL + "messages");
            const messageData = await messageResponse.json();
            console.log(user, messageData);
            setMessages(messageData.filter((m) => m.to_user == user.id));
          }
        }
      }

      setIsUserLoading(false);
    };
    const refreshBackned = async () => {
      const response = await fetch("https://tu-servicio.onrender.com/");
      const data = await response.json();
      console.log("Backend refresh:  ", data);
    };

    const interval = setInterval(async () => {
      refreshBackned();
    }, 1000 * 60 * 5);

    if (!componentLoaded) {
      auth();
      refreshBackned();
      componentLoaded = true;
    }

    // Desmontar useEffect
    return () => {
      setCurrentSesion(null);
      clearInterval(interval);
    };
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        currentSesion,
        setCurrentSesion,
        isUserLoading,
        setIsUserLoading,
        messages,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
