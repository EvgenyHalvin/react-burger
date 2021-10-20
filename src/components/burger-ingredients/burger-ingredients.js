import React, { useEffect, useState } from "react";
import burgerIngredientsStyles from "./burger-ingredients.module.css";
import PropTypes from 'prop-types';

import OrderIngredient from "../order-ingredient/order-ingredient";
import OrderList from "../order-list/order-list";
import Info from "../info/info";

function BurgerIngredients({ items, openOrderDetailsModal }) {
  const [firstAndLastItem, setFirstAndLastItems] = useState(false);

  useEffect(() => {
    setFirstAndLastItems(() => {
      return items.find((item) => item.name === "Краторная булка N-200i");
    });
  }, [items]);

  return (
    <section className={burgerIngredientsStyles.burgerIngredients}>
      {firstAndLastItem && (
        <OrderIngredient item={firstAndLastItem} placeType="first" />
      )}
      <OrderList placeType="middle" items={items} exception={firstAndLastItem} />
      {firstAndLastItem && (
        <OrderIngredient item={firstAndLastItem} placeType="last" />
      )}
      <Info isOpen={openOrderDetailsModal} />
    </section>
  );
}

BurgerIngredients.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  openOrderDetailsModal: PropTypes.func.isRequired
}

export default BurgerIngredients;
