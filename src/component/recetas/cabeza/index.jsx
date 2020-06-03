import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import "./style.css";
import { connect } from "react-redux";
import {
  getRecipes,
  deleteRecipes,
} from "../../../stores/action/recipesActions";
import AddRecipeModal from "./add Recipe/";
import Loading from "../../loading";
import { getRecipeDetail } from "../../../stores/action/recetaDetalleActions";

class RecetaCabeza extends Component {
  state = {
    receta: [{}],
    name: "",
  };

  onDeleteClick = (id) => {
    this.props.deleteRecipes(id);
  };
  onDetailsClick = (id = null) => {
    if (id == null) return;
    this.props.getRecipeDetail(id);
    window.location.replace(`/recetas/${id}`);
  };
  convertDate = (date) => {
    return new Date(date).toLocaleDateString();
  };
  render() {
    const { recipes } = this.props.receta;
    const { loading } = this.props.receta;
    if (loading) {
      return <Loading></Loading>;
    } else {
      return (
        <Container className="mt-2 p-4">
          {this.props.user.isAuthenticated ? <AddRecipeModal /> : null}

          <ListGroup>
            {recipes.map((data) => (
              <div key={data.iPproducto}>
                <ListGroupItem>{data.nombre}</ListGroupItem>
                <ListGroupItem>
                  {this.convertDate(data.ultima_modificacion)}
                </ListGroupItem>
                {this.props.user.isAuthenticated ? (
                  <>
                    <Button
                      className="button delete-button"
                      onClick={() => this.onDeleteClick(data.idProducto)}
                    >
                      Eliminar Receta
                    </Button>
                    <Button
                      className="button delete-button"
                      onClick={() => this.onDetailsClick(data.idProducto)}
                    >
                      Detalles
                    </Button>
                  </>
                ) : null}
              </div>
            ))}
          </ListGroup>
        </Container>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  receta: state.receta,
  user: state.auth,
});

export default connect(mapStateToProps, {
  getRecipeDetail,
  getRecipes,
  deleteRecipes,
})(RecetaCabeza);
