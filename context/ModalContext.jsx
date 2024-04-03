import React, { createContext, useEffect, useState } from "react";
import accounts from "../mocks/accounts.json";
import Modal from "../components/modal/Modal";
import { LoginScreen } from "../components/login/LoginScreem";
import { useDialog, useDisclosoure } from "../hooks/useDisclosoure";
import { CrearCuenta } from "../components/register/CrearCuenta";
import { CreateConvocatoria } from "../components/convocatorias/CreateConvocatoria";
import CreateServicios from "../components/servicios/CreateServicios";
import { CreateOfertas } from "../components/ofertas/crearOferta";
import Dialog from "../components/modal/Dialog";
import UserView from "../components/User/UserView";
import { getUserByName } from "../libs/getUser";
import Message from "../components/modal/Message";

export const ModalContext = createContext();

export default function ModalProvider({ children }) {
  const [dialog, setDialog] = useState();
  const [userViewData, setUserViewData] = useState();
  const [messageData, setMessageData] = useState({ title: "Title" });

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

  const {
    onOpen: onOpenUserView,
    onClose: onCloseUserView,
    modalState: modalStateUserView,
  } = useDisclosoure();

  const {
    onOpen: onOpenMessage,
    onClose: onCloseMessage,
    modalState: modalStateMessage,
  } = useDisclosoure();

  // useEffect(() => {
  //   onOpenMessage();
  // }, []);

  const openUserViewAsync = async (username) => {
    setUserViewData(null);
    onOpenUserView();
    const user = await getUserByName(username);
    setUserViewData(user);
  };

  const openMessageModal = (
    toUser,
    about,
    description,
    inAcceptMode = false
  ) => {
    console.log(description);
    setMessageData((prev) => ({
      toUser,
      about: about ?? prev.about,
      description: description ?? prev.description,
      acceptMode: inAcceptMode,
    }));
    onOpenMessage();
  };

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
        modalStateOfertas,
        onCloseCrearServicios,
        onOpenDialog,
        onCloseDialog,
        setDialog,
        onOpenUserView,
        onCloseUserView,
        userViewData,
        setUserViewData,
        openUserViewAsync,
        messageData,
        openMessageModal,
        setMessageData,
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
      <Modal state={modalStateUserView} onClose={onCloseUserView}>
        <UserView />
      </Modal>
      <Modal state={modalStateMessage} onClose={onCloseMessage}>
        <Message />
      </Modal>
    </ModalContext.Provider>
  );
}
