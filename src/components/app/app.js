import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import appStyles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";

import { getItems } from "../../services/actions/actions";

function App() {
  const { ingredients, ingridientsFailed, ingridientsRequest } = useSelector(store => store.burger);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, []);

  // Отображение модальных окон
  const [isIngredientDetailsOpen, setIsIngredientDetailsOpen] = useState(false);
  const [isOrderDetails, setIsOrderDetails] = useState(false);

  // Информация для модального окна
  const [modalInfo, setModalInfo] = useState({});

  // Отрктыие модального окна с информацией об игриденте
  function openIngredientDetailsModal(ingreient) {
    setIsIngredientDetailsOpen(true);
    setModalInfo(ingreient);
  }

  // Открытие модального окна с информацией о заказе
  function openOrderDetailsModal() {
    setIsOrderDetails(true);
  }

  // Закрытие любого модального окна
  function closeModal() {
    setIsIngredientDetailsOpen(false);
    setIsOrderDetails(false);

    setModalInfo({});
  }

  return (
    <div className={appStyles.app}>
      <AppHeader />

      {ingredients && (
        <Main
          items={ingredients}
          openIngridientsModal={openIngredientDetailsModal}
          openOrderDetailsModal={openOrderDetailsModal}
        />
      )}

      {isIngredientDetailsOpen && (
        <Modal
          onClose={closeModal}
          headerTitle="Детали ингредиента"
          isOpen={isIngredientDetailsOpen}
        >
          <IngredientDetails item={modalInfo} />
        </Modal>
      )}

      {isOrderDetails && (
        <Modal onClose={closeModal} isOpen={isOrderDetails}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}

export default App;
