import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  RouteProps,
} from "react-router-dom";

import Sacola from "./page/Sacola";
import Pagamento from "./page/Pagamento";
import Confirmacao from "./page/Confirmacao";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Sacola} />
        <Route exact path="/pagamento" component={Pagamento} />
        <Route exact path="/pagamento/Confirmacao" component={Confirmacao} />
      </Switch>
    </BrowserRouter>
  );
}
