import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import GlobalProvider from "../context/GlobalContext";
import ModalProvider from "../context/ModalContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </GlobalProvider>
  </React.StrictMode>
);
