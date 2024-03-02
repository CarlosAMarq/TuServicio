import React, { createContext, useState } from "react";
import accounts from '../mocks/accounts.json'

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(accounts.testUser);

  return (
    <GlobalContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </GlobalContext.Provider>
  );
}
