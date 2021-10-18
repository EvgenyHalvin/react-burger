import React, { useEffect, useState } from "react";
import burgerIngredientsStyles from "./burger-ingredients.module.css";

import OrderIngredient from "../order-ingredient/order-ingredient";
import OrderList from "../order-list/order-list";

function BurgerIngredients({ items }) {
  const [firstAndLastItem, setFirstAndLastItems] = useState(false);

  useEffect(() => {
    setFirstAndLastItems(() => {
      return items.find((item) => item.name === "Краторная булка N-200i")
    })
  }, [items]);

  return (
    <section className={burgerIngredientsStyles.burgerIngredients}>
      {firstAndLastItem && <OrderIngredient item={firstAndLastItem} placeType="first" />}
      <OrderList placeType="middle" items={items} />
      {firstAndLastItem && <OrderIngredient item={firstAndLastItem} placeType="last" />}
    </section>
  );
}

export default BurgerIngredients;
