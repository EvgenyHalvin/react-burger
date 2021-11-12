import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import mainStyles from "./main.module.css";

import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

function Main() {
  return (
    <DndProvider backend={HTML5Backend}>
      <main className={mainStyles.main}>
        <BurgerConstructor />
        <BurgerIngredients />
      </main>
    </DndProvider>
  );
}

export default Main;
