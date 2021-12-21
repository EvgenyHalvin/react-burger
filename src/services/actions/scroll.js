export const TAB_ONE = "TAB_ONE";
export const TAB_TWO = "TAB_TWO";
export const TAB_THREE = "TAB_THREE";

export const UPDATE_POSITIONS = "UPDATE_POSITIONS";

export const scrollToSection = (currentTab) => {
  return function (dispatch, getState) {
    const state = getState().scroll;
    const ingredientContainerElement = document.getElementById("ingredientContainer");

    switch (currentTab) {
      case "one": {
        ingredientContainerElement.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return dispatch({ type: TAB_ONE });
      }
      case "two": {
        ingredientContainerElement.scrollTo({
          top: state.tabPositions.toppingTop - state.tabPositions.bunTop,
          behavior: "smooth",
        });
        return dispatch({ type: TAB_TWO });
      }
      case "three": {
        ingredientContainerElement.scrollTo({
          top: state.tabPositions.sauceTop - state.tabPositions.bunTop,
          behavior: "smooth",
        });
        return dispatch({ type: TAB_THREE });
      }
      default:
        return console.log("no tab");
    }
  };
};
