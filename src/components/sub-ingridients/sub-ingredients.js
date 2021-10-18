import React from "react";
import subIngredientsStyles from "./sub-ingredients.module.css";

import Ingredient from "../ingredient/ingredient";

// Рендер ингредиентов на страницу в соответствующий раздел
function SubIngridients({ items, type, message }) {
  return (
    <>
      {items ? (
        items
          .filter((i) => i.type === type)
          .map((item) => <Ingredient item={item} key={item._id} />)
      ) : (
        <p
          className={`text text_type_main-default ${subIngredientsStyles.notification}`}
        >
          {message}
        </p>
      )}
    </>
  );
}

export default SubIngridients;
