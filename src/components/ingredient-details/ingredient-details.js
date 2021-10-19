import React from "react";
import ingredientsDetailsStyles from "./ingredient-details.module.css";

import NutritionComponent from "../nutrition-component/nutrition-component";

function IngredientDetails({ item }) {
  console.log(item)
  return (
    <div className={ingredientsDetailsStyles.details}>
      <div
        style={{ backgroundImage: `url(${item.image_large})` }}
        className={ingredientsDetailsStyles.image}
      />
      <p
        className={`text text_type_main-medium ${ingredientsDetailsStyles.name}`}
      >
        {item.name}
      </p>
      <ul className={ingredientsDetailsStyles.nutritionValues}>
        <li className={ingredientsDetailsStyles.value}>
          <NutritionComponent unitName="Калории,ккал" valueAmount={item.calories} />
        </li>
        <li className={ingredientsDetailsStyles.value}>
          <NutritionComponent unitName="Белки, г" valueAmount={item.proteins} />
        </li>
        <li className={ingredientsDetailsStyles.value}>
          <NutritionComponent unitName="Жиры, г" valueAmount={item.fat} />
        </li>
        <li className={ingredientsDetailsStyles.value}>
          <NutritionComponent unitName="Углеводы, г" valueAmount={item.carbohydrates} />
        </li>
      </ul>
    </div>
  );
}

export default IngredientDetails;
