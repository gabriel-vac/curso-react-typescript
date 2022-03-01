import React from "react";
import { Switch, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Repo } from "../pages/Repo";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={Dashboard} path="/" exact />
      {/* caracter + indica que a partir dessa barra terei 1 parâmetro */}
      <Route component={Repo} path="/repositories/:repository+" />
    </Switch>
  );
};
