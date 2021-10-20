import React from "react";
import PropTypes from 'prop-types';
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

Main.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  openIngridientsModal: PropTypes.func.isRequired,
  openOrderDetailsModal: PropTypes.func.isRequired
}

export default Main;
