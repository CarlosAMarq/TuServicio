import React, { createContext } from "react";

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <GlobalContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </GlobalContext.Provider>
  );
}
