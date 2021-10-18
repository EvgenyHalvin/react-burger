import React from "react";
import ingredientsStyles from "./ingredients.module.css";

import SubIngridients from "../sub-ingridients/sub-ingredients";

function Ingredients({ items }) {
  return (
    <div className={ingredientsStyles.ingredients}>
      <p className={`text text_type_main-medium ${ingredientsStyles.title}`}>
        Булки
      </p>
      <SubIngridients
        items={items}
        type="bun"
        message="Булок пока что нет в меню, но они скоро появятся!"
      />

      <p className={`text text_type_main-medium ${ingredientsStyles.title}`}>
        Основные блюда
      </p>
      <SubIngridients
        items={items}
        type="main"
        message="Основные блюда пока что отсутствуют в нашем меню."
      />

      <p className={`text text_type_main-medium ${ingredientsStyles.title}`}>
        Соусы
      </p>
      <SubIngridients
        items={items}
        type="sauce"
        message="К сожалению, соусы закончились, но мы уже исправляем эту ситуацию!"
      />
    </div>
  );
}

export default Ingredients;
