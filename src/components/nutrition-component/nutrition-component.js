import React from "react";
import PropTypes from "prop-types";
import nutritionComponent from "./nutrition-component.module.css";

function NutritionComponent({ unitName, valueAmount }) {
  return (
    <>
      <p className={`${nutritionComponent.units} text text_type_main-default`}>
        {unitName}
      </p>
      <p
        className={`${nutritionComponent.amount} text text_type_digits-default`}
      >
        {valueAmount}
      </p>
    </>
  );
}

NutritionComponent.propTypes = {
  unitName: PropTypes.string,
  valueAmount: PropTypes.number
}

export default NutritionComponent;
