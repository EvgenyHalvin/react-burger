import {
  TAB_ONE,
  TAB_TWO,
  TAB_THREE,
  UPDATE_POSITIONS,
} from "../actions/scroll";

const scrollState = {
  currentTab: "one",

  tabPositions: {
    bunTop: null,
    toppingTop: null,
    sauceTop: null,
  },
};

export const scrollReducer = (state = scrollState, action) => {
  switch (action.type) {
    case TAB_ONE: {
      return {
        ...state,
        currentTab: "one",
      };
    }
    case TAB_TWO: {
      return {
        ...state,
        currentTab: "two",
      };
    }
    case TAB_THREE: {
      return {
        ...state,
        currentTab: "three",
      };
    }
    case UPDATE_POSITIONS: {
      return {
        ...state,
        tabPositions: action.tabPositions,
      };
    }
    default:
      return state;
  }
};
