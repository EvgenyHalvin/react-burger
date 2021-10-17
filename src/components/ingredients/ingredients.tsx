import React from 'react';
import ingredientsStyles from './ingredients.module.css';

function Ingredients() {
  return(
    <div className={ingredientsStyles.ingredients}>
      <p className={`text text_type_main-medium ${ingredientsStyles.title}`}>Булки</p>
      <p className={`text text_type_main-medium ${ingredientsStyles.title}`}>Соусы</p>
    </div>
  )
}

export default Ingredients;