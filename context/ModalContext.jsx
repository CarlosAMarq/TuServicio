import React, { createContext, useState } from "react";
import accounts from "../mocks/accounts.json";
import Modal from "../components/modal/Modal";
import { LoginScreen } from "../components/login/LoginScreem";
import { useDisclosoure } from "../hooks/useDisclosoure";
import CuentaScream from "../components/User/CuentaScream";
import { CrearCuenta } from "../components/createC/CrearCuenta";

export const ModalContext = createContext();

export default function ModalProvider({ children }) {
  const {
    onOpen: onOpenLogin,
    onClose: onCloseLogin,
    modalState,
  } = useDisclosoure();

  const {
    onOpen: onOpenRegister,
    onClose: onCloseRegister,
    modalState: modalStateRegister,
  } = useDisclosoure();
  return (
    <ModalContext.Provider
      value={{ onOpenLogin, onOpenRegister, onCloseLogin, onCloseRegister }}
    >
      {children}
      <Modal state={modalState} onClose={onCloseLogin}>
        <LoginScreen />
      </Modal>

      <Modal state={modalStateRegister} onClose={onCloseRegister}>
        <CrearCuenta />
      </Modal>
    </ModalContext.Provider>
  );
}
