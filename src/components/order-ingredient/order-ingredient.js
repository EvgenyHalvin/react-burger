import React, { useRef } from "react";
import PropTypes from "prop-types";
import { shapeIngridientTypes } from "../../utils/types";

import orderIngredientStyles from "./order-ingredient.module.css";

import { useDispatch } from "react-redux";
import { DELETE_ORDER_ITEM, MOVE_ITEM } from "../../services/actions/actions";

import { useDrag, useDrop } from "react-dnd";

import { CurrencyIcon, LockIcon, DeleteIcon, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function OrderIngredient({ item, index, placeType }) {
  const ref = useRef();
  const dispatch = useDispatch();
  const { _id: itemId, type: itemType } = item;

  // DND для сортировки
  const [, drop] = useDrop({
    accept: "orderItem",
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      // Снимаем мерки с контейнера ингредиента
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Ищем центр конйтенера ингредиента
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Позиция указателя мыши
      const clientOffset = monitor.getClientOffset();
      // Количество пикселей до верха контейнера ингредиента от указателя мыши
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      // Перемещение только тогда, когда мышь пересекла половину высоты элемента
      // При перетаскивание вниз только тогда, когда курсор находится ниже 50% элемента
      // При перетаскивание вверх только тогда, когда курсор находится выше 50% элемента
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      dispatch({
        type: MOVE_ITEM,
        itemId: item.itemId,
        dragIndex: dragIndex,
        hoverIndex: hoverIndex,
      });
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: item.type !== "bun" ? "orderItem" : "bunItem",
    item: { index, itemId, itemType },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  // Удаление ингредиента из списка заказа
  const onDelete = () => {
    dispatch({
      type: DELETE_ORDER_ITEM,
      listKey: item.listKey,
      itemId: item._id,
    });
  };

  return (
    <div
      ref={ref}
      className={`${orderIngredientStyles.component} ${
        item.type !== "bun" && orderIngredientStyles.draggableComponent
      }`}
      style={{
        marginBottom: `${placeType === "last" && "0"}`,
        opacity,
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
          <span>{item.name}</span>
          {placeType === "first" ? (
            <span className={orderIngredientStyles.place}> (верх)</span>
          ) : placeType === "last" ? (
            <span className={orderIngredientStyles.place}> (низ)</span>
          ) : (
            ""
          )}
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
