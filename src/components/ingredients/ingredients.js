import React, { useEffect, useRef } from "react";
import ingredientsStyles from "./ingredients.module.css";

import SubIngridients from "../sub-ingridients/sub-ingredients";

import { useSelector, useDispatch } from "react-redux";
import { getItems } from "../../services/actions/actions";
import { UPDATE_POSITIONS } from "../../services/actions/scroll";

function Ingredients() {
  const dispatch = useDispatch();

  const containerRef = useRef();
  const bunRef = useRef();
  const toppingRef = useRef();
  const sauceRef = useRef();

  useEffect(() => {
    dispatch(getItems());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { ingredients } = useSelector((store) => store.burger);

  // При загрузке ингредиентов записываем верхние отступы разделов
  useEffect(() => {
    dispatch({
      type: UPDATE_POSITIONS,
      tabPositions: {
        bunTop: bunRef.current.getBoundingClientRect().top,
        toppingTop: toppingRef.current.getBoundingClientRect().top,
        sauceTop: sauceRef.current.getBoundingClientRect().top,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ingredients]);

  return (
    <div id="ingredientContainer" ref={containerRef} className={ingredientsStyles.ingredients}>
      <p className={`text text_type_main-medium ${ingredientsStyles.title}`} ref={bunRef}>
        Булки
      </p>
      <SubIngridients items={ingredients} type="bun" message="Булок пока что нет в меню, но они скоро появятся!" />

      <p className={`text text_type_main-medium ${ingredientsStyles.title}`} ref={toppingRef}>
        Начинки
      </p>
      <SubIngridients items={ingredients} type="main" message="Основные блюда пока что отсутствуют в нашем меню." />

      <p className={`text text_type_main-medium ${ingredientsStyles.title}`} ref={sauceRef}>
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
