import React from "react";
import PropTypes from "prop-types";
import subIngredientsStyles from "./sub-ingredients.module.css";

import Ingredient from "../ingredient/ingredient";

// Рендер ингредиентов на страницу в соответствующий раздел
function SubIngridients({ items, type, message, openIngridientsModal }) {
  return (
    <>
      {items ? (
        items
          .filter((i) => i.type === type)
          .map((item) => (
            <Ingredient
              openIngridientsModal={openIngridientsModal}
              item={item}
              key={item._id}
            />
          ))
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

SubIngridients.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  message: PropTypes.string
}

export default SubIngridients;
