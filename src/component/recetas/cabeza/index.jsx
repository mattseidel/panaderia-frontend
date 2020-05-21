import React, { Component } from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";
import "./style.css";
import { connect } from "react-redux";
import {
  getRecipes,
  deleteRecipes,
} from "../../../stores/action/recipesActions";
import PropTypes from "prop-types";
import AddRecipeModal from "./add Recipe/";
import Loading from "../../loading";

class RecetaCabeza extends Component {
  state = {
    receta: [{}],
    name: "",
  };

  // componentDidMount() {
  //   this.props.getRecipes();
  // }

  onDeleteClick = (id) => {
    this.props.deleteRecipes(id);
  };
  convertDate = (date) => {
    return new Date(date).toLocaleDateString();
  };
  render() {
    const { recipes } = this.props.receta;
    const { loading } = this.props.receta;
    {
      console.log(this.props);
    }
    if (loading) {
      return <Loading></Loading>;
    } else {
      return (
        <Container className="mt-2 p-4">
          <AddRecipeModal />
          
          <ListGroup>
            {recipes.map((data) => (
              <div key={data.id}>
                <ListGroupItem>{data.nombre_receta}</ListGroupItem>
                <ListGroupItem>
                  {this.convertDate(data.ulima_modificacion)}
                </ListGroupItem>
                <ListGroupItem>{data.comentarios} </ListGroupItem>
                <Button
                  className="button delete-button"
                  onClick={() => this.onDeleteClick(data.id)}
                >
                  Eliminar Receta
                </Button>
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
});

export default connect(mapStateToProps, { getRecipes,  deleteRecipes })(
  RecetaCabeza
);
