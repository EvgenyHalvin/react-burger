import React, { useEffect, useRef, useState } from "react";
import ingredientsStyles from "./ingredients.module.css";

import SubIngridients from "../sub-ingridients/sub-ingredients";

import { useSelector, useDispatch } from "react-redux";
import { getItems } from "../../services/actions/actions";
import { TAB_ONE, TAB_TWO, TAB_THREE, UPDATE_POSITIONS } from "../../services/actions/scroll";

function Ingredients() {
  const [indents, setIndents] = useState({
    containerIndent: null,
    bunIndent: null,
    toppingIndent: null,
    sauceIndent: null,
  });

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

  // Обновление данных о вертикальных отступах
  const updateIndent = () => {
    setIndents({
      ...indents,
      containerIndent: containerRef.current.getBoundingClientRect().top,
      bunIndent: bunRef.current.getBoundingClientRect().top,
      toppingIndent: toppingRef.current.getBoundingClientRect().top,
      sauceIndent: sauceRef.current.getBoundingClientRect().top,
    });
  };

  // Слушаем положение и в соответствии с ним меняем выделенный таб сверху
  useEffect(() => {
    let distances = [];
    let smallest;

    const { containerIndent, bunIndent, toppingIndent, sauceIndent } = indents;

    let bunDistance = Math.abs(containerIndent - bunIndent);
    let toppingDistance = Math.abs(containerIndent - toppingIndent);
    let sauceDistance = Math.abs(containerIndent - sauceIndent);

    distances = [
      { nameSection: TAB_ONE, value: bunDistance },
      { nameSection: TAB_TWO, value: toppingDistance },
      { nameSection: TAB_THREE, value: sauceDistance },
    ];

    function findSmallest(arr) {
      return arr.reduce((current, next) => (current.value <= next.value ? current : next), arr[0]);
    }

    smallest = findSmallest(distances);

    dispatch({ type: smallest.nameSection });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indents]);

  return (
    <div id="ingredientContainer" ref={containerRef} className={ingredientsStyles.ingredients} onScroll={updateIndent}>
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
