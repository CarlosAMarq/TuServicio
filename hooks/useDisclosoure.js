import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import { useUser } from "./useUser";

export const useDisclosoure = () => {
  const [modalState, setModalState] = useState("closed");
  const {user} = useUser()

  const onOpen = () => {
    setModalState("open");
    document.body.classList.add('no-scroll')
  };
  const onClose = () => {
    setModalState("closed");
    document.body.classList.remove('no-scroll')
  };
  return { modalState, onOpen, onClose };
};

export const useDialog = () => {
  const {setDialog, onOpenDialog} = useContext(ModalContext);

  const onOpen = ({
    title,
    description,
    onConfirm,
    type
  }) => {
    setDialog({title,description, onConfirm, type});
    onOpenDialog();
  };

  return { onOpen };
};
