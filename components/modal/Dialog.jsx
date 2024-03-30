import React, { useContext } from "react";
import "./dialog.css";
import { ModalContext } from "../../context/ModalContext";
export default function Dialog({
  title,
  description,
  type,
  onConfirm,
  onClose,
}) {
  const { onOpenDialog, oinCloseDialog } = useContext(ModalContext);

  const handleSubmit = (event = "submit") => {
    if (event == "submit") onConfirm();

    onClose();
  };

  return (
    <div className="dialog">
      <h4>{title}</h4>
      <p>{description && description}</p>
      <div className="button-sec">
        <button className={type} onClick={() => handleSubmit()}>
          {type != "delete" ? "Aceptar" : "Eliminar"}
        </button>
        <button onClick={() => handleSubmit("cancel")}>Cancelar</button>
      </div>
    </div>
  );
}
