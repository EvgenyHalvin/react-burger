import React from "react";
import orderListStyles from "./order-list.module.css";

import { v4 as uuidv4 } from "uuid";

import { useDispatch, useSelector } from "react-redux";
import { ADD_ORDER_ITEM } from "../../services/actions/actions";

import { useDrop } from "react-dnd";

import OrderIngredient from "../order-ingredient/order-ingredient";

function OrderList() {
  const dispatch = useDispatch();
  const { constructorIngridients } = useSelector((store) => store.burger);

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item) {
      item.itemType !== "bun" && dispatch({
        type: ADD_ORDER_ITEM,
        itemId: item.itemId,
        itemType: item.itemType,
        listKey: uuidv4(),
      });
    },
  });

  return (
    <div ref={dropTarget} className={orderListStyles.orderList}>
      {constructorIngridients &&
        constructorIngridients
          .filter((i) => i.type !== "bun")
          .map((item) => <OrderIngredient key={item.listKey} item={item} />)}
    </div>
  );
}

export default OrderList;
