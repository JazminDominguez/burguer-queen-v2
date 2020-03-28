import React from "react";
import logo from "./logo.svg";
import "./styles/styles.scss";

import MealType from "./components/MealType";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;
