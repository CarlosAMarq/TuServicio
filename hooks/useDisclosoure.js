import { useState } from "react";

export const useDisclosoure = () => {
  const [modalState, setModalState] = useState("closed");

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
