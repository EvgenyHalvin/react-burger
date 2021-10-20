import React from "react";
import PropTypes from 'prop-types';
import modalStyles from "./modal.module.css";

function ModalOverlay({ onClose }) {
  return <div className={modalStyles.overLay} onClick={onClose} />;
}

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired
}

export default ModalOverlay;
