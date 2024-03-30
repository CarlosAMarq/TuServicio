import React, { createContext, useEffect, useState } from "react";
import accounts from "../mocks/accounts.json";
import Modal from "../components/modal/Modal";
import { LoginScreen } from "../components/login/LoginScreem";
import { useDisclosoure } from "../hooks/useDisclosoure";
import { CrearCuenta } from "../components/register/CrearCuenta";
import { CreateConvocatoria } from "../components/convocatorias/CreateConvocatoria";
import CreateServicios from "../components/servicios/CreateServicios";
import { CreateOfertas } from "../components/ofertas/crearOferta";
import Dialog from "../components/modal/Dialog";

export const ModalContext = createContext();

export default function ModalProvider({ children }) {
  const [dialog, setDialog] = useState();

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
    onOpen: onOpenCrearConvocatoria,
    onClose: onCloseCrearConvocatoria,
    modalState: modalStateCrearConvocatoria,
  } = useDisclosoure();
  const {
    onOpen: onOpenDialog,
    onClose: onCloseDialog,
    modalState: modalStateDialog,
  } = useDisclosoure();
  const {
    onOpen: onOpenCrearServicios,
    onClose: onCloseCrearServicios,
    modalState: modalStateCrearServicios,
  } = useDisclosoure();

  const {
    onOpen: onOpenCrearOfertas,
    onClose: onCloseCrearOfertas,
    modalState: modalStateOfertas,
  } = useDisclosoure();

  useEffect(() => {
    
  }, []);
  return (
    <ModalContext.Provider
      value={{
        onOpenLogin,
        onOpenRegister,
        onCloseLogin,
        onCloseRegister,
        onCloseCrearConvocatoria,
        onOpenCrearConvocatoria,
        onOpenCrearServicios,
        onOpenCrearOfertas,
        onCloseCrearOfertas,
        onCloseCrearServicios,
        onOpenDialog,
        onCloseDialog,
        setDialog
      }}
    >
      {children}
      <Modal state={modalState} onClose={onCloseLogin}>
        <LoginScreen />
      </Modal>

      <Modal state={modalStateRegister} onClose={onCloseRegister}>
        <CrearCuenta />
      </Modal>

      <Modal
        state={modalStateCrearConvocatoria}
        onClose={onCloseCrearConvocatoria}
      >
        <CreateConvocatoria />
      </Modal>

      <Modal state={modalStateCrearServicios} onClose={onCloseCrearServicios}>
        <CreateServicios />
      </Modal>
      <Modal state={modalStateOfertas} onClose={onCloseCrearOfertas}>
        <CreateOfertas />
      </Modal>
      {dialog && (
        <Modal state={modalStateDialog} onClose={onCloseDialog}>
          <Dialog
            title={dialog.title}
            description={dialog.description}
            type={dialog.type}
            onConfirm={dialog.onConfirm}
            onClose={onCloseDialog}
          />
        </Modal>
      )}
    </ModalContext.Provider>
  );
}
