import { combineReducers } from "redux";
import {
  GET_BURGER_ITEMS,
  GET_BURGER_ITEMS_FAILED,
  GET_BURGER_ITEMS_SUCCESS,
} from "../actions/actions";

const burgerState = {
  ingredients: [],
  constructorIngridients: [],
  currentIngridient: {},
  orderDetails: {},

  ingredientsFailed: false,
  ingredientsRequest: false,
};

// Редьюсер всех манипуляций с бургером
const burger = (state = burgerState, action) => {
  switch (action.type) {
    case GET_BURGER_ITEMS: {
      return {
        ...state,
        ingredientsRequest: true,
        ingredientsFailed: false,
      };
    }
    case GET_BURGER_ITEMS_SUCCESS: {
      return {
        ...state,
        ingredients: action.data,
        ingredientsRequest: false,
      };
    }
    case GET_BURGER_ITEMS_FAILED: {
      return {
        ...state,
        ingredientsFailed: true,
        ingredientsRequest: false,
      };
    }
    default:
      return state;
  }
};

// Корневой редьюсер
export const rootReducer = combineReducers({
  burger,
});
