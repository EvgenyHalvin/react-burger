import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import modalStyles from "./modal.module.css";

import ModalOverlay from "./modal-overlay";
import ModalHeader from "./modal-header";

import { useDispatch } from "react-redux";
import {
  DELETE_BURGER_ITEM_DATA,
  CLOSE_ORDER_MODAL,
} from "../../services/actions/actions";

function Modal({ children, headerTitle, type }) {
  const modalRoot = document.getElementById("react-modals");

  const dispatch = useDispatch();

  const onClose = () => {
    switch (type) {
      case "ingredient": {
        return dispatch({ type: DELETE_BURGER_ITEM_DATA });
      }
      case "order": {
        return dispatch({ type: CLOSE_ORDER_MODAL });
      }
      default:
        return;
    }
  };

  // Установка слушателя для Escape
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        onClose();
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
        <ModalHeader onClose={onClose}>{headerTitle}</ModalHeader>
        {children}
      </div>
      <ModalOverlay onClose={onClose} />
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  headerTitle: PropTypes.string,
};

export default Modal;
