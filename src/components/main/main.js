import React from "react";
import mainStyles from "./main.module.css";

import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

function Main({ items, openIngridientsModal, openOrderDetailsModal }) {
  return (
    <main className={mainStyles.main}>
      <BurgerConstructor
        items={items}
        openIngridientsModal={openIngridientsModal}
      />
      <BurgerIngredients
        items={items}
        openOrderDetailsModal={openOrderDetailsModal}
      />
    </main>
  );
}

export default Main;
