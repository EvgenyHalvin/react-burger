import React, { useEffect, useState } from "react";
import infoStyles from "./info.module.css";

import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";

import { useDispatch, useSelector } from "react-redux";
import { SET_ORDER } from "../../services/actions/actions";

function Info() {
  const [orderPrice, setOrderPrice] = useState(0);

  const dispatch = useDispatch();

  const { orderItems } = useSelector((store) => store.burger);

  const isOpen = () => {
    dispatch({ type: SET_ORDER });
  };

  function calcPrice(arr) {
    return arr.reduce((current, next) => current + next.price, 0);
  }

  useEffect(() => {
    setOrderPrice(calcPrice(orderItems));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderItems]);

  return (
    <div className={infoStyles.info}>
      <p className={`text text_type_main-large ${infoStyles.pticeText}`}>{orderPrice}</p>
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
