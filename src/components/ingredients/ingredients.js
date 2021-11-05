import React, { useEffect } from "react";
import ingredientsStyles from "./ingredients.module.css";

import SubIngridients from "../sub-ingridients/sub-ingredients";

import { useSelector, useDispatch } from 'react-redux';
import { getItems } from "../../services/actions/actions";

function Ingredients() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { ingredients } = useSelector(store => store.burger);
  
  return (
    <div className={ingredientsStyles.ingredients}>
      <p className={`text text_type_main-medium ${ingredientsStyles.title}`}>
        Булки
      </p>
      <SubIngridients
        items={ingredients}
        type="bun"
        message="Булок пока что нет в меню, но они скоро появятся!"
      />

      <p className={`text text_type_main-medium ${ingredientsStyles.title}`}>
        Начинки
      </p>
      <SubIngridients
        items={ingredients}
        type="main"
        message="Основные блюда пока что отсутствуют в нашем меню."
      />

      <p className={`text text_type_main-medium ${ingredientsStyles.title}`}>
        Соусы
      </p>
      <SubIngridients
        items={ingredients}
        type="sauce"
        message="К сожалению, соусы закончились, но мы уже исправляем эту ситуацию!"
      />
    </div>
  );
}

export default Ingredients;

