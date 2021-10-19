import React from "react";
import modalStyles from "./modal.module.css";

function ModalOverlay({ onClose }) {
  return <div className={modalStyles.overLay} onClick={onClose} />;
}

export default ModalOverlay;
