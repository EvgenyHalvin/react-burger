import React from "react";
import mainStyles from "./main.module.css";

import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

function Main({ items }) {
  return (
    <main className={mainStyles.main}>
      <BurgerConstructor items={items} />
      <BurgerIngredients />
    </main>
  );
}

export default Main;
