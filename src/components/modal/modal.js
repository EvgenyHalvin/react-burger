import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import modalStyles from "./modal.module.css";

import ModalOverlay from "./modal-overlay";
import ModalHeader from "./modal-header";

function Modal({ children, headerTitle, onClose, isOpen, info }) {
  const modalRoot = document.getElementById("react-modals");

  // Установка слушателя для Escape
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };

    window.addEventListener("keydown", close);

    return () => window.removeEventListener("keydown", close);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ReactDOM.createPortal(
    <div
      className={`${modalStyles.modalContainer} ${
        isOpen && modalStyles.modalContainer_opened
      }`}
    >
      <div className={modalStyles.modal}>
        <ModalHeader onClose={onClose}>{headerTitle}</ModalHeader>
        {children}
      </div>
      <ModalOverlay onClose={onClose} />
    </div>,
    modalRoot
  );
}

export default Modal;
