import React from "react";
import constructorStyles from "./burger-constructor.module.css";

import Tabs from "../tabs/tabs";
import Ingredients from "../ingredients/ingredients";

function BurgerConstructor({ items, openIngridientsModal }) {
  return (
    <section className={constructorStyles.burgerConstructor}>
      <h1 className={`text text_type_main-large ${constructorStyles.title}`}>
        Соберите бургер
      </h1>
      <Tabs />
      <Ingredients openIngridientsModal={openIngridientsModal} items={items} />
    </section>
  );
}

export default BurgerConstructor;
