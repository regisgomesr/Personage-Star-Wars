import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Personage from "./components/personage";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Personage} />
      </Switch>
    </BrowserRouter>
  );
}
