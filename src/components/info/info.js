import React from "react";
import infoStyles from "./info.module.css";

import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

function Info() {
  return (
    <div className={infoStyles.info}>
      <p className="text text_type_main-large">610</p>
      <span className={infoStyles.icon}>
        <CurrencyIcon type="primary" />
      </span>
      <Button type="primary" size="large">
        Оформить заказ
      </Button>
    </div>
  );
}

export default Info;
