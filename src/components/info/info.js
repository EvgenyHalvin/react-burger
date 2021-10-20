import React from "react";
import infoStyles from "./info.module.css";
import PropTypes from 'prop-types';

import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

function Info({ isOpen }) {
  return (
    <div className={infoStyles.info}>
      <p className={`text text_type_main-large ${infoStyles.pticeText}`}>610</p>
      <span className={infoStyles.icon}>
        <CurrencyIcon type="primary" />
      </span>
      <Button onClick={isOpen} type="primary" size="large">
        Оформить заказ
      </Button>
    </div>
  );
}

Info.propTypes = {
  isOpen: PropTypes.func.isRequired
}

export default Info;
