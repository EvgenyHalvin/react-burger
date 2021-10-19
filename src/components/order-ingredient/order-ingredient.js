import React from "react";
import PropTypes from "prop-types";
import orderIngredientStyles from "./order-ingredient.module.css";

import {
  CurrencyIcon,
  LockIcon,
  DeleteIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function OrderIngredient({ item, placeType }) {
  return (
    <div
      className={orderIngredientStyles.component}
      style={{
        marginBottom: `${placeType === "last" && "0"}`,
      }}
    >
      {placeType !== "first" && placeType !== "last" && (
        <DragIcon type="primary" />
      )}
      <div
        className={orderIngredientStyles.listItem}
        style={{
          borderRadius: `${
            placeType === "first"
              ? "88px 88px 40px 40px"
              : placeType === "last"
              ? "40px 40px 88px 88px"
              : "40px"
          }`,
          marginTop: `${placeType === "last" && "16px"}`,
          marginRight: `${
            (placeType === "first" || placeType === "last") && "8px"
          }`,
          marginLeft: `${
            (placeType === "first" || placeType === "last") && "auto"
          }`,
        }}
      >
        <div
          className={orderIngredientStyles.image}
          style={{
            backgroundImage: `url(${item.image_mobile})`,
            transform: `${placeType === "last" && "rotate(180deg)"}`,
          }}
        />
        <p
          className={`text text_type_main-default ${orderIngredientStyles.name}`}
        >
          {item.name}
          <br />
          {placeType === "first"
            ? "(верх)"
            : placeType === "last"
            ? "(низ)"
            : ""}
        </p>
        <div className={orderIngredientStyles.priceBlock}>
          <p
            className={`text text_type_main-small ${orderIngredientStyles.price}`}
          >
            {item.price}
          </p>
          <CurrencyIcon type="primary" />
        </div>
        {placeType === "first" || placeType === "last" ? (
          <LockIcon type="secondary" />
        ) : (
          <DeleteIcon type="primary" />
        )}
      </div>
    </div>
  );
}

OrderIngredient.propTypes = {
  item: PropTypes.shape({
    calories: PropTypes.number,
    carbohydrates: PropTypes.number,
    fat: PropTypes.number,
    image: PropTypes.string,
    image_large: PropTypes.string,
    image_mobile: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    proteins: PropTypes.number,
    type: PropTypes.string,
    __v: PropTypes.number,
    _id: PropTypes.string,
  }),
  placeType: PropTypes.string
}

export default OrderIngredient;
