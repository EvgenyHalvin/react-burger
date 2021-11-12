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
  REPLACE_ORDER_BUN,
} from "../actions/actions";

const burgerState = {
  ingredients: [],
  ingredientsFailed: false,
  ingredientsRequest: false,

  currentBun: {},
  constructorIngridients: [],

  currentIngridient: {},
  isIngredientDetailsOpen: false,

  orderItems: [],
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

        // По умолчанию добавляем счетчик краторной булке
        ingredients: [
          ...action.data.map((item) => {
            if (item.name === "Краторная булка N-200i") {
              return {
                ...item,
                amount: 1,
              };
            }
            return { ...item, amount: 0 };
          }),
        ],

        // Добавляем краторную булку в заказ после рендера ингредиентов
        orderItems: [
          ...state.orderItems,
          action.data.find((item) => item.name === "Краторная булка N-200i"),
          action.data.find((item) => item.name === "Краторная булка N-200i"),
        ],

        currentBun: action.data.find((item) => item.name === "Краторная булка N-200i"),
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

        // Увеличиваем счетчик после добавления ингредиента в список заказа
        ingredients: [
          ...state.ingredients,
          state.ingredients
            .filter((item) => item._id === action.itemId)
            .map((item) => ({ ...item, amount: item.amount++ })),
        ],

        orderItems: [...state.orderItems, state.ingredients.find((item) => item._id === action.itemId)],

        // Добавляем ингредиент и устанавливаем ему уникальный ключ
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

        // Убираем ингредиент из списка заказа
        constructorIngridients: [...state.constructorIngridients.filter((item) => item.listKey !== action.listKey)],

        orderItems: [...state.orderItems.filter((item) => item._id !== action.itemId)],

        // Уменьшаем счетчик после удаления ингредиента из списка заказа
        ingredients: [
          ...state.ingredients,
          state.ingredients
            .filter((item) => item._id === action.itemId)
            .map((item) => ({ ...item, amount: item.amount-- })),
        ],
      };
    }
    case REPLACE_ORDER_BUN: {
      return {
        //Замена на выбранную булку
        ...state,
        currentBun: state.ingredients.find((item) => item._id === action.itemId),
        orderItems: [
          ...state.orderItems.filter((item) => item.type !== "bun"),
          state.ingredients.find((item) => item._id === action.itemId),
          state.ingredients.find((item) => item._id === action.itemId),
        ],

        // Увеличение счетчика выбранной булки
        ingredients: [
          ...state.ingredients,
          state.ingredients
            .filter((item) => item.type === "bun")
            .map((item) => {
              if (item._id === action.itemId && item.amount === 0) {
                return {
                  ...item,
                  amount: item.amount++,
                };
              } else if (item.amount === 1) {
                return {
                  ...item,
                  amount: item.amount--,
                };
              }
              return item;
            }),
        ],
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
        orderDetails: action.data,
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
