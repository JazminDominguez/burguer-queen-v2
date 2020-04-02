import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MealType from "../components/MealType";
import Menu from "../components/Menu";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={MealType} exact={true} />
      <Route path="/breakfast" component={Menu} />
      <Route path="/meal" component={Menu} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
