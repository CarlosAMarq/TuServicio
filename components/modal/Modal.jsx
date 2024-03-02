import React from "react";
import "./modal.css";
import { IoIosClose } from "react-icons/io";
export default function Modal({ children, state, onClose }) {
  return (
    <div className={`cmodal modal-${state}`}>
      <div className="cmodal-panel"></div>
      <div className="cmodal-content">
        {children}
        <button onClick={onClose} className="cmodal-close-button">
          <IoIosClose size={30} />
        </button>
      </div>
    </div>
  );
}
