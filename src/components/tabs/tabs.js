import React from "react";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import { useDispatch, useSelector } from "react-redux";
import { scrollToSection } from "../../services/actions/scroll";

function Tabs() {
  const { currentTab } = useSelector((store) => store.scroll);
  const dispatch = useDispatch();

  const switchTab = (e) => {
    dispatch(scrollToSection(e));
  };

  return (
    <div style={{ display: "flex" }}>
      <Tab value="one" active={currentTab === "one"} onClick={switchTab}>
        Булки
      </Tab>
      <Tab value="two" active={currentTab === "two"} onClick={switchTab}>
        Начинки
      </Tab>
      <Tab value="three" active={currentTab === "three"} onClick={switchTab}>
        Соусы
      </Tab>
    </div>
  );
}

export default Tabs;
