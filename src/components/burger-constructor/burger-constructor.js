import React from "react";
import constructorStyles from "./burger-constructor.module.css";
import PropTypes from 'prop-types';

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

BurgerConstructor.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  openIngridientsModal: PropTypes.func.isRequired
}

export default BurgerConstructor;
