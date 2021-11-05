import React, { useEffect, useState } from "react";
import burgerIngredientsStyles from "./burger-ingredients.module.css";

import OrderIngredient from "../order-ingredient/order-ingredient";
import OrderList from "../order-list/order-list";
import Info from "../info/info";

import { useSelector, useDispatch } from "react-redux";
import { getItems } from "../../services/actions/actions";

function BurgerIngredients() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { ingredients } = useSelector((store) => store.burger);

  const [firstAndLastItem, setFirstAndLastItems] = useState(false);

  useEffect(() => {
    setFirstAndLastItems(() => {
      return ingredients.find((item) => item.name === "Краторная булка N-200i");
    });
  }, [ingredients]);

  return (
    <section className={burgerIngredientsStyles.burgerIngredients}>
      {firstAndLastItem && (
        <OrderIngredient item={firstAndLastItem} placeType="first" />
      )}
      <OrderList
        placeType="middle"
        items={ingredients}
        exception={firstAndLastItem}
      />
      {firstAndLastItem && (
        <OrderIngredient item={firstAndLastItem} placeType="last" />
      )}
      <Info />
    </section>
  );
}

export default BurgerIngredients;
