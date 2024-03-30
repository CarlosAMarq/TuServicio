import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import { useUser } from "./useUser";

export const useDisclosoure = () => {
  const [modalState, setModalState] = useState("closed");
  const {user} = useUser()

  console.log(user);

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
  const {setDialog} = useContext(ModalContext);

  const onOpen = ({
    title,
    description,
    onConfirm,
  }) => {
    setDialog({title,description, onConfirm});
  };

  return { onOpen };
};
