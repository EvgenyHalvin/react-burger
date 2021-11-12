import api from "../../utils/api";

// Для загрузки через api
export const GET_BURGER_ITEMS = "GET_BURGER_ITEMS";
export const GET_BURGER_ITEMS_FAILED = "GET_BURGER_ITEMS_FAILED";
export const GET_BURGER_ITEMS_SUCCESS = "GET_BURGER_ITEMS_SUCCESS";

// Для попапа с данными об ингредиенте
export const ADD_BURGER_ITEM_DATA = "GET_BURGER_ITEM_DATA";
export const DELETE_BURGER_ITEM_DATA = "DELETE_BURGER_ITEM_DATA";

// Для попапа с данными о заказе
export const SET_ORDER = "SET_ORDER";
export const CLOSE_ORDER_MODAL = "CLOSE_ORDER_MODAL";

// Для DND и манипуляций с заказом
export const ADD_ORDER_ITEM = "ADD_ORDER_ITEM";
export const DELETE_ORDER_ITEM = "DELETE_ORDER_ITEM";
export const REPLACE_ORDER_BUN = "REPLACE_ORDER_BUN";

export function getItems() {
  return function (dispatch) {
    dispatch({
      type: GET_BURGER_ITEMS,
    });

    api
      .getIngredients()
      .then((res) => {
        dispatch({
          type: GET_BURGER_ITEMS_SUCCESS,
          data: res.data,
        });
      })
      .catch(() =>
        dispatch({
          type: GET_BURGER_ITEMS_FAILED,
        })
      );
  };
}

export function regenId() {
  return function (dispatch) {};
}
