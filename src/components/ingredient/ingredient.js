import React from 'react';
import PropTypes from 'prop-types';
import ingredientStyles from './ingredient.module.css';

import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

function Ingredient({ item, openIngridientsModal }) {
  return(
    <div className={ingredientStyles.ingredient} onClick={() => openIngridientsModal(item)}>
      <Counter count={1} size="small" />
      <div className={ingredientStyles.image} style={{backgroundImage: `url(${item.image})`}}/>
      <div className={ingredientStyles.priceBlock}>
        <p className={`text text_type_main-small ${ingredientStyles.price}`}>{item.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`text text_type_main-small ${ingredientStyles.name}`}>{item.name}</p>
    </div>
  )
}

Ingredient.propTypes = {
  item: PropTypes.shape({
    calories: PropTypes.number,
    carbohydrates: PropTypes.number,
    fat: PropTypes.number,
    image: PropTypes.string,
    image_large: PropTypes.string,
    image_mobile: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    proteins: PropTypes.number,
    type: PropTypes.string,
    __v: PropTypes.number,
    _id: PropTypes.string,
  }),
  openIngridientsModal: PropTypes.func
}

export default Ingredient;