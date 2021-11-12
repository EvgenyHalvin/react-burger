import React from "react";
import burgerIngredientsStyles from "./burger-ingredients.module.css";

import OrderIngredient from "../order-ingredient/order-ingredient";
import OrderList from "../order-list/order-list";
import Info from "../info/info";

import { useSelector, useDispatch } from "react-redux";
import { REPLACE_ORDER_BUN } from "../../services/actions/actions";

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
