import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { connect } from "react-redux";
import { addRecipe } from "../../../../stores/action/recipesActions";

class AddRecipeModal extends Component {
  state = {
    modal: false,
    nombre_receta: "",
    producto: "",
    comentarios: "",
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      nombre_receta: this.state.nombre_receta,
      producto: this.state.producto,
      comentarios: this.state.comentarios,
    };

    //agregar receta por addRecipe action
    this.props.addRecipe(newRecipe);

    //close modale
    this.toggle()
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <Button className="button" onClick={this.toggle}>
          Añadir Receta
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Añadir nueva receta</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="nombre_receta">Nombre de la receta</Label>
                <Input
                  type="text"
                  name="nombre_receta"
                  id="nombre_receta"
                  placeholder="Agregar el nuevo nombre de la receta"
                  onChange={this.onChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="producto">Producto</Label>
                <Input
                  pattern="[0-9]+"
                  type="text"
                  name="producto"
                  id="producto"
                  placeholder="Agregar la nueva producto"
                  onChange={this.onChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="comentario">Comentario</Label>
                <Input
                  type="text"
                  name="comentarios"
                  id="comentarios"
                  placeholder="Agregar el comentario"
                  onChange={this.onChange}
                ></Input>
              </FormGroup>
              <Button className="button" block>
                Agregar Receta
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    recipes: state.recipes
})

export default connect( mapStateToProps, {addRecipe})(AddRecipeModal);
