import React from "react";
import { useSelector } from "react-redux";
import appStyles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";

import { useDispatch } from "react-redux";
import {
  DELETE_BURGER_ITEM_DATA,
  CLOSE_ORDER_MODAL,
} from "../../services/actions/actions";

function App() {
  const { isIngredientDetailsOpen } = useSelector((store) => store.ingredient);
  const { isOrderDetailsOpen } = useSelector((store) => store.order);

  const dispatch = useDispatch();

  const onClose = (type) => {
    switch (type) {
      case "ingredient": {
        return dispatch({ type: DELETE_BURGER_ITEM_DATA });
      }
      case "order": {
        return dispatch({ type: CLOSE_ORDER_MODAL });
      }
      default:
        return;
    }
  };

  return (
    <div className={appStyles.app}>
      <AppHeader />

      <Main />

      {isIngredientDetailsOpen && (
        <Modal
          headerTitle="Детали ингредиента"
          type="ingredient"
          onClose={onClose}
        >
          <IngredientDetails />
        </Modal>
      )}

      {isOrderDetailsOpen && (
        <Modal type="order" onClose={onClose}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}

export default App;
