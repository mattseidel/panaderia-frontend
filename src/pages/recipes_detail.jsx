import React, { Component } from "react";
import RecetaDetalleCabeza from "../component/receta detalle/cabezera";
import RecetaDetalleCuerpo from "../component/receta detalle/cuerpo";
import { connect } from "react-redux";
import { getRecipeDetail } from "../stores/action/recetaDetalleActions";
import { getMateriaPrima } from "../stores/action/materiaPrima";
import AddRecipe from "../component/receta detalle/agregar";
import Loading from "../component/loading";
import NoAutirizado from "../component/auth/unautorized";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
    };
  }
  componentDidMount() {
    this.onRecipeLoad();
    this.props.getMateriaPrima();
  }

  onRecipeLoad() {
    let { id } = this.props.match.params;
    this.props.getRecipeDetail(id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.user !== prevProps.user) {
      this.onRecipeLoad();
    }
  }
  render() {
    if (this.props.materiaPrima.isLoading) return <Loading />;
    if (!this.props.user) return <NoAutirizado />;
    else {
      return (
        <div className="container">
          <RecetaDetalleCabeza data={this.props.header[0]} />
          <hr className="my-2" />
          <RecetaDetalleCuerpo
            idProducto={this.props.match.params.id}
            cuerpo={this.props.detail}
          />
          <AddRecipe
            id={this.props.match.params.id}
            materiaPrima={this.props.materiaPrima.materia}
          ></AddRecipe>
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => ({
  header: state.detallesReceta.data,
  detail: state.detallesReceta.cuerpo,
  materiaPrima: state.materiaPrima,
  user: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getRecipeDetail, getMateriaPrima })(
  Details
);
