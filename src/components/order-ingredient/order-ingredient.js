import React from "react";
import PropTypes from "prop-types";
import { shapeIngridientTypes } from "../../utils/types";

import orderIngredientStyles from "./order-ingredient.module.css";

import { useDispatch } from "react-redux";
import { DELETE_ORDER_ITEM } from "../../services/actions/actions";

import { CurrencyIcon, LockIcon, DeleteIcon, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function OrderIngredient({ item, placeType }) {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch({
      type: DELETE_ORDER_ITEM,
      listKey: item.listKey,
      itemId: item._id,
    });
  };

  return (
    <div
      className={orderIngredientStyles.component}
      style={{
        marginBottom: `${placeType === "last" && "0"}`,
      }}
    >
      {placeType !== "first" && placeType !== "last" && <DragIcon type="primary" />}
      <div
        className={orderIngredientStyles.listItem}
        style={{
          borderRadius: `${
            placeType === "first" ? "88px 88px 40px 40px" : placeType === "last" ? "40px 40px 88px 88px" : "40px"
          }`,
          marginTop: `${placeType === "last" && "16px"}`,
          marginRight: `${(placeType === "first" || placeType === "last") && "8px"}`,
          marginLeft: `${(placeType === "first" || placeType === "last") && "auto"}`,
        }}
      >
        <div
          className={orderIngredientStyles.image}
          style={{
            backgroundImage: `url(${item.image_mobile})`,
            transform: `${placeType === "last" && "rotate(180deg)"}`,
          }}
        />
        <p className={`text text_type_main-default ${orderIngredientStyles.name}`}>
          <span className={orderIngredientStyles.dots}>{item.name}</span>
          <br />
          {placeType === "first" ? "(верх)" : placeType === "last" ? "(низ)" : ""}
        </p>
        <div className={orderIngredientStyles.priceBlock}>
          <p className={`text text_type_main-small ${orderIngredientStyles.price}`}>{item.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        {placeType === "first" || placeType === "last" ? (
          <LockIcon type="secondary" />
        ) : (
          <span className={orderIngredientStyles.pointer}>
            <DeleteIcon type="primary" onClick={onDelete} />
          </span>
        )}
      </div>
    </div>
  );
}

OrderIngredient.propTypes = {
  item: PropTypes.shape(shapeIngridientTypes),
  placeType: PropTypes.string,
};

export default OrderIngredient;
