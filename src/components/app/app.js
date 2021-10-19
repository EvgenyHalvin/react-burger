import React, { useState, useEffect } from "react";
import appStyles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

import api from "../../utils/api";

function App() {
  const [ingredients, setIngredients] = useState([]);

  // Отображение модальных окон
  const [isIngredientDetailsOpen, setIsIngredientDetailsOpen] = useState(false);
  const [isOrderDetails, setIsOrderDetails] = useState(false);

  // Информация для модального окна
  const [modalInfo, setModalInfo] = useState({});

  // Загрузка данных об ингредиентах с сервера
  useEffect(() => {
    api
      .getIngredients()
      .then((res) => setIngredients(res.data))
      .catch((err) => console.log(err));
  }, []);

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

      <Main
        items={ingredients}
        openIngridientsModal={openIngredientDetailsModal}
        openOrderDetailsModal={openOrderDetailsModal}
      />

      {isIngredientDetailsOpen && (
        <Modal
          onClose={closeModal}
          headerTitle="Детали ингредиента"
          isOpen={isIngredientDetailsOpen}
        >
          <IngredientDetails item={modalInfo}/>
        </Modal>
      )}

      {isOrderDetails && (
        <Modal onClose={closeModal} isOpen={isOrderDetails}></Modal>
      )}
      <div id="react-modals"></div>
    </div>
  );
}

export default App;
