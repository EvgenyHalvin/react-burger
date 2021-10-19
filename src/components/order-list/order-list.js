import React from "react";
import orderListStyles from "./order-list.module.css";

import OrderIngredient from "../order-ingredient/order-ingredient";

function OrderList({ items, exception }) {
  return (
    <div className={orderListStyles.orderList}>
      {items && exception && items
        .filter((i) => i.name !== exception.name)
        .map((item) => (
          <OrderIngredient key={item._id} item={item} />
        ))}
    </div>
  );
}

export default OrderList;
