import React, { createContext, useState } from "react";
import accounts from "../mocks/accounts.json";
import Modal from "../components/modal/Modal";
import { LoginScreen } from "../components/login/LoginScreem";
import { useDisclosoure } from "../hooks/useDisclosoure";
import { CrearCuenta } from "../components/register/CrearCuenta";
import { CreateConvocatoria } from "../components/convocatorias/CreateConvocatoria";
import CreateServicios from "../components/servicios/CreateServicios";
import { CreateOfertas } from "../components/ofertas/crearOferta";

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

  const {
    onOpen:onOpenCrearConvocatoria,
    onClose:onCloseCrearConvocatoria,
    modalState: modalStateCrearConvocatoria

  }= useDisclosoure();
  const {
    onOpen:onOpenCrearServicios,
    onClose:onCloseCrearServicios,
    modalState: modalStateCrearServicios
  }= useDisclosoure();

  const{
    onOpen: onOpenCrearOfertas,
    onClose: onCloseCrearOfertas,
    modalState:modalStateOfertas
  }=useDisclosoure()
  return (
    <ModalContext.Provider
      value={{ onOpenLogin,
        onOpenRegister,
        onCloseLogin,
        onCloseRegister,
        onCloseCrearConvocatoria,
        onOpenCrearConvocatoria,
        onOpenCrearServicios,
        onOpenCrearOfertas,
        onCloseCrearOfertas,
        onCloseCrearServicios
              
            }}
    >
      {children}
      <Modal state={modalState} onClose={onCloseLogin}>
        <LoginScreen />
      </Modal>

      <Modal state={modalStateRegister} onClose={onCloseRegister}>
        <CrearCuenta />
      </Modal>

      <Modal state={modalStateCrearConvocatoria} onClose={onCloseCrearConvocatoria}>
        <CreateConvocatoria/>
      </Modal>

      <Modal state={modalStateCrearServicios} onClose={onCloseCrearServicios}>
            <CreateServicios/>
      </Modal>
      <Modal state={modalStateOfertas} onClose={onCloseCrearOfertas}>
            <CreateOfertas/>
      </Modal>

      
    </ModalContext.Provider>
  );
}
