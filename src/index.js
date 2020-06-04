import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "./pages";
import "./style.css";
import Navbar from "./component/navbar";
import recipes from "./pages/recipes";
import { Provider } from "react-redux";
import store from "./stores/store";
import Details from "./pages/recipes_detail";
import MateriaPrima from "./pages/materia_prima";
import ProduccionDetalle from "./pages/produccion_detail";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/recetas" component={recipes} />
          <Route exact path="/recetas/:id" component={Details} />
          <Route exact path="/materia" component={MateriaPrima} />
          <Route exact path="/produccion/:id" component={ProduccionDetalle} />
        </Switch>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
