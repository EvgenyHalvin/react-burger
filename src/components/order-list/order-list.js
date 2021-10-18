import React from "react";
import orderListStyles from "./order-list.module.css";

import OrderIngredient from "../order-ingredient/order-ingredient";

function OrderList({ items }) {
  return (
    <div className={orderListStyles.orderList}>
      {items.map((item) => (
        <OrderIngredient key={item._id} item={item} />
      ))}
    </div>
  );
}

export default OrderList;
