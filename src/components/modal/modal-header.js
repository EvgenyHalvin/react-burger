import React from "react";
import PropTypes from 'prop-types';
import modalStyles from "./modal.module.css";

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function ModalHeader({ children, onClose }) {
  return (
    <div className={modalStyles.header}>
      <p className={`${modalStyles.title} text text_type_main-large`}>
        {children}
      </p>
      <span className={modalStyles.closeIcon}>
        <CloseIcon type="primary" onClick={onClose} />
      </span>
    </div>
  );
}

ModalHeader.propTypes = {
  children: PropTypes.string,
  onClose: PropTypes.func.isRequired
}

export default ModalHeader;
