import React from 'react';
import PropTypes from 'prop-types';
import { shapeIngridientTypes } from '../../utils/types';
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
  item: PropTypes.shape(shapeIngridientTypes).isRequired,
  openIngridientsModal: PropTypes.func.isRequired
}

export default Ingredient;