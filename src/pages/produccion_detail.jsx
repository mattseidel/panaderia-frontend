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
    return (
      <div className="container">
        <ProduccionDetalleHeader head={this.props.producto} />
        <hr className="my-2" />
        <ProduccionDetalleBody body={this.props.materia} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  producto: state.produccion.data,
  materia: state.produccion.materia,
});
export default connect(mapStateToProps, { getProduccionProducto })(
  ProduccionDetalle
);
