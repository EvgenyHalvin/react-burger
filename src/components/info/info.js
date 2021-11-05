import React from "react";
import infoStyles from "./info.module.css";

import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { useDispatch } from "react-redux";
import { SET_ORDER } from "../../services/actions/actions";

function Info() {
  const dispatch = useDispatch();

  const isOpen = () => {
    dispatch({ type: SET_ORDER });
  };

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

export default Info;
