import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import modalStyles from "./modal.module.css";

import ModalOverlay from "./modal-overlay";
import ModalHeader from "./modal-header";

function Modal({ children, headerTitle, type, onClose }) {
  const modalRoot = document.getElementById("react-modals");

  // Установка слушателя для Escape
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        onClose(type);
      }
    };

    window.addEventListener("keydown", close);

    return () => window.removeEventListener("keydown", close);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ReactDOM.createPortal(
    <div
      className={`${modalStyles.modalContainer} ${modalStyles.modalContainer_opened}`}
    >
      <div className={modalStyles.modal}>
        <ModalHeader onClose={() => onClose(type)}>{headerTitle}</ModalHeader>
        {children}
      </div>
      <ModalOverlay onClose={() => onClose(type)} />
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  headerTitle: PropTypes.string,
  type: PropTypes.string,
  onClose: PropTypes.func,
};

export default Modal;
