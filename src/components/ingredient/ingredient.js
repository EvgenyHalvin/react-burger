import React from "react";
import PropTypes from "prop-types";
import { shapeIngridientTypes } from "../../utils/types";
import ingredientStyles from "./ingredient.module.css";

import { useDrag } from "react-dnd";

import { ADD_BURGER_ITEM_DATA } from "../../services/actions/actions";

import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";

import { useDispatch } from "react-redux";

function Ingredient({ item }) {
  const { _id } = item;
  const dispatch = useDispatch();

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: {_id}
  });

  const openModal = () => {
    dispatch({ type: ADD_BURGER_ITEM_DATA, data: item });
  };

  return (
    <div ref={dragRef} className={ingredientStyles.ingredient} onClick={openModal}>
      {/* <Counter count={1} size="small" /> */}
      <div className={ingredientStyles.image} style={{ backgroundImage: `url(${item.image})` }} />
      <div className={ingredientStyles.priceBlock}>
        <p className={`text text_type_main-small ${ingredientStyles.price}`}>{item.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`text text_type_main-small ${ingredientStyles.name}`}>{item.name}</p>
    </div>
  );
}

Ingredient.propTypes = {
  item: PropTypes.shape(shapeIngridientTypes).isRequired,
};

export default Ingredient;
