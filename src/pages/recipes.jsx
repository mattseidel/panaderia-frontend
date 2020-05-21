import React, { Component } from "react";
import RecetaCabeza from "../component/recetas/cabeza";

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <RecetaCabeza></RecetaCabeza>;
  }
}

export default Recipes;