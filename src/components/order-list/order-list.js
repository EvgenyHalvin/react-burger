import React from "react";
import orderListStyles from "./order-list.module.css";

import { useSelector } from 'react-redux';

import OrderIngredient from "../order-ingredient/order-ingredient";

function OrderList() {
  const { constructorIngridients } = useSelector((store) => store.burger);

  return (
    <div className={orderListStyles.orderList}>
      {constructorIngridients &&
        constructorIngridients
          .filter((i) => i.type !== "bun")
          .map((item, index) => <OrderIngredient key={item.listKey} index={index} item={item} />)}
    </div>
  );
}

export default OrderList;
