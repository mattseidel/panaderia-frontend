import React, { Component } from "react";
import { connect } from "react-redux";
import { getProduccionProducto } from "../stores/action/produccionAction";
import ProduccionDetalleHeader from "../component/produccion_detalle/header";
import ProduccionDetalleBody from "../component/produccion_detalle/body";

class ProduccionDetalle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getProduccionProducto(this.props.match.params.id);
  }
  render() {
    if (!this.props.user)
      return (
        <div className="container">
          <h1>No autorizado</h1>
          <h5>por favor ingrese para ver esta sección</h5>
        </div>
      );
    else if (this.props.producto.length === 0)
      return (
        <div className="container">
          <h1>No agregado</h1>
          <h5>Este producto no se ha agregado aun</h5>
        </div>
      );
    return (
      <div className="container">
        <ProduccionDetalleHeader head={this.props.producto[0]} />
        <hr className="my-2" />
        <ProduccionDetalleBody body={this.props.materia} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  producto: state.produccion.data,
  materia: state.produccion.materia,
  user: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { getProduccionProducto })(
  ProduccionDetalle
);
