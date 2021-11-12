import { combineReducers } from "redux";
import { scrollReducer } from "./scroll";
import {
  GET_BURGER_ITEMS,
  GET_BURGER_ITEMS_FAILED,
  GET_BURGER_ITEMS_SUCCESS,
  ADD_BURGER_ITEM_DATA,
  DELETE_BURGER_ITEM_DATA,
  SET_ORDER,
  CLOSE_ORDER_MODAL,
  ADD_ORDER_ITEM,
  DELETE_ORDER_ITEM,
} from "../actions/actions";

const burgerState = {
  ingredients: [],
  ingredientsFailed: false,
  ingredientsRequest: false,

  constructorIngridients: [],

  currentIngridient: {},
  isIngredientDetailsOpen: false,

  orderDetails: {},
  isOrderDetailsOpen: false,
};

// Редьюсер загрузки данных об ингредиентах + манипуляции с ингредиентами
const burgerReducer = (state = burgerState, action) => {
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
    case ADD_ORDER_ITEM: {
      return {
        ...state,
        constructorIngridients: [
          ...state.constructorIngridients,
          state.ingredients
            .filter((item) => item._id === action.itemId)
            .map((item) => ({ ...item, listKey: action.listKey }))[0],
        ],
      };
    }
    case DELETE_ORDER_ITEM: {
      return {
        ...state,
        constructorIngridients: [...state.constructorIngridients.filter((item) => item.listKey !== action.listKey)],
      };
    }
    default:
      return state;
  }
};

// Редьюсер добавления данных об ингредиенте в попап
const modalIngredientReducer = (state = burgerState, action) => {
  switch (action.type) {
    case ADD_BURGER_ITEM_DATA: {
      return {
        ...state,
        currentIngridient: action.data,
        isIngredientDetailsOpen: true,
      };
    }
    case DELETE_BURGER_ITEM_DATA: {
      return {
        ...state,
        currentIngridient: {},
        isIngredientDetailsOpen: false,
      };
    }
    default:
      return state;
  }
};

// Редьюсер добавления данных о заказе в попап
const modalOrderReducer = (state = burgerState, action) => {
  switch (action.type) {
    case SET_ORDER: {
      return {
        ...state,
        orderDetails: {},
        isOrderDetailsOpen: true,
      };
    }
    case CLOSE_ORDER_MODAL: {
      return {
        ...state,
        isOrderDetailsOpen: false,
      };
    }
    default:
      return state;
  }
};

// Корневой редьюсер
export const rootReducer = combineReducers({
  burger: burgerReducer,
  ingredient: modalIngredientReducer,
  order: modalOrderReducer,
  scroll: scrollReducer,
});
