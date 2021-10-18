import React, { useState, useEffect } from "react";
import appStyles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import Main from "../main/main";

import api from "../../utils/api";

function App() {
  const [ingredients, setIngredients] = useState([]);

  // Загрузка данных об ингредиентах с сервера
  useEffect(() => {
    api
      .getIngredients()
      .then((res) => setIngredients(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={appStyles.app}>
      <AppHeader />
      <Main items={ingredients} />
    </div>
  );
}

export default App;
