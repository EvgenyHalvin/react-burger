import React from "react";
import ingredientsDetailsStyles from "./ingredient-details.module.css";

import NutritionComponent from "../nutrition-component/nutrition-component";

import { useSelector } from "react-redux";

function IngredientDetails() {
  const { currentIngridient } = useSelector((store) => store.ingredient);

  return (
    <div className={ingredientsDetailsStyles.details}>
      <div
        style={{ backgroundImage: `url(${currentIngridient.image_large})` }}
        className={ingredientsDetailsStyles.image}
      />
      <p
        className={`text text_type_main-medium ${ingredientsDetailsStyles.name}`}
      >
        {currentIngridient.name}
      </p>
      <ul className={ingredientsDetailsStyles.nutritionValues}>
        <li className={ingredientsDetailsStyles.value}>
          <NutritionComponent
            unitName="Калории,ккал"
            valueAmount={currentIngridient.calories}
          />
        </li>
        <li className={ingredientsDetailsStyles.value}>
          <NutritionComponent
            unitName="Белки, г"
            valueAmount={currentIngridient.proteins}
          />
        </li>
        <li className={ingredientsDetailsStyles.value}>
          <NutritionComponent
            unitName="Жиры, г"
            valueAmount={currentIngridient.fat}
          />
        </li>
        <li className={ingredientsDetailsStyles.value}>
          <NutritionComponent
            unitName="Углеводы, г"
            valueAmount={currentIngridient.carbohydrates}
          />
        </li>
      </ul>
    </div>
  );
}

export default IngredientDetails;
