import React from "react";
import { useSelector } from "react-redux";
import appStyles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";

function App() {
  const { isIngredientDetailsOpen } = useSelector((store) => store.ingredient);
  const { isOrderDetailsOpen } = useSelector((store) => store.order);

  return (
    <div className={appStyles.app}>
      <AppHeader />

      <Main />

      {isIngredientDetailsOpen && (
        <Modal headerTitle="Детали ингредиента" type="ingredient">
          <IngredientDetails />
        </Modal>
      )}

      {isOrderDetailsOpen && (
        <Modal type="order">
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}

export default App;
