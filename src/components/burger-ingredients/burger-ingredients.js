import React from "react";
import burgerIngredientsStyles from "./burger-ingredients.module.css";

import OrderIngredient from "../order-ingredient/order-ingredient";
import OrderList from "../order-list/order-list";
import Info from "../info/info";

import { useSelector, useDispatch } from "react-redux";
import { REPLACE_ORDER_BUN, ADD_ORDER_ITEM } from "../../services/actions/actions";

import { v4 as uuidv4 } from "uuid";

import { useDrop } from "react-dnd";

function BurgerIngredients() {
  const dispatch = useDispatch();

  const { currentBun } = useSelector((store) => store.burger);

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item) {
      item.itemType === "bun" &&
        dispatch({
          type: REPLACE_ORDER_BUN,
          itemId: item.itemId,
        });
      item.itemType !== "bun" &&
        dispatch({
          type: ADD_ORDER_ITEM,
          itemId: item.itemId,
          itemType: item.itemType,
          listKey: uuidv4(),
        });
    },
  });

  return (
    <section ref={dropTarget} className={burgerIngredientsStyles.burgerIngredients}>
      {currentBun && <OrderIngredient item={currentBun} placeType="first" />}
      <OrderList />
      {currentBun && <OrderIngredient item={currentBun} placeType="last" />}
      <Info />
    </section>
  );
}

export default BurgerIngredients;
