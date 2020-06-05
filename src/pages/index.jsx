import React, { Component } from "react";
import { connect } from "react-redux";
import { getProduccion } from "../stores/action/produccionAction";
import { getRecipes } from "../stores/action/recipesActions";
import ProduccionRead from "../component/produccion/read";
import AddProduccion from "../component/produccion/add";
import Loading from "../component/loading";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getProduccion();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.recetas !== this.props.recetas)
      console.log(this.props.recetas);
  }
  render() {
    if (this.props.recetas.loading && this.props.produccion.isLoading) {
      return <Loading></Loading>;
    }
    return (
      <div className="container">
          <ProduccionRead produccion={this.props.produccion.produccion} />
        
        <AddProduccion recetas={this.props.recetas.recipes} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  produccion: state.produccion,
  recetas: state.receta,
});

export default connect(mapStateToProps, { getProduccion, getRecipes })(Index);
