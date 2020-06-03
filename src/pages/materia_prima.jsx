import React, { Component } from "react";
import { connect } from "react-redux";
import { getMateriaPrima } from "../stores/action/materiaPrima";
import { getPlace } from "../stores/action/categoriesAction";

import ReadMateriaPrima from "../component/materia prima/read";
import AddMateriaPrima from "../component/materia prima/add";

class MateriaPrima extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getMateriaPrima();
    this.props.getPlace();
  }

  render() {
    return (
      <div className="container mt-2">
        {this.props.user ? (
          <AddMateriaPrima ubicacion={this.props.lugar} />
        ) : null}
        <ReadMateriaPrima materia={this.props.materia} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  materia: state.materiaPrima.materia,
  lugar: state.categoria.place,
  user: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { getMateriaPrima, getPlace })(
  MateriaPrima
);
