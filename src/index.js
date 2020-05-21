import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "./pages";
import "./style.css";
import Navbar from "./component/navbar";
import recipes from "./pages/recipes";
import { Provider } from "react-redux";
import store from "./stores/store";



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/recetas" component={recipes} />

        </Switch>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
