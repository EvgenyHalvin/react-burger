import api from "../../utils/api";

export const GET_BURGER_ITEMS = "GET_BURGER_ITEMS";
export const GET_BURGER_ITEMS_FAILED = "GET_BURGER_ITEMS_FAILED";
export const GET_BURGER_ITEMS_SUCCESS = "GET_BURGER_ITEMS_SUCCESS";

export const GET_BURGER_CONSTRUCTOR_ITEMS = "GET_BURGER_CONSTRUCTOR_ITEMS";
export const ADD_BURGER_ITEM_DATA = "GET_BURGER_ITEM_DATA";
export const DELETE_BURGER_ITEM_DATA = "DELETE_BURGER_ITEM_DATA";
export const SET_ORDER = "SET_ORDER";

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
      .catch((err) =>
        dispatch({
          type: GET_BURGER_ITEMS_FAILED,
        })
      );
  };
}
