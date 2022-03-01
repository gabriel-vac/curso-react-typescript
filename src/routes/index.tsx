import React from "react";
import { Switch, Route } from "react-router-dom";
// import { Dashboard } from "../pages/Dashboard";
// import { Repo } from "../pages/Repo";

const Dashboard = React.lazy(
  () =>
    import(
      /* webpackPrefetch: true */
      /* webpackChunkName: "dashboard" */ "../pages/Dashboard"
    )
);
const Repo = React.lazy(
  () =>
    import(
      /* webpackPrefetch: true */
      /* webpackChunkName: "repo" */ "../pages/Repo"
    )
);

//WebpackPrefetch faz carregar o chunk em cache depois que todos os principais ja tenham sido carregados. Ex: Carregar o Repo em cache na pagina Dashboard
//depois que o Dashboard ja tenha sido carregado

export const Routes: React.FC = () => {
  return (
    <React.Suspense fallback={"Loading..."}>
      <Switch>
        <Route component={Dashboard} path="/" exact />
        {/* caracter + indica que a partir dessa barra terei 1 parâmetro */}
        <Route component={Repo} path="/repositories/:repository+" />
      </Switch>
    </React.Suspense>
  );
};
