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
import {
  getPlace,
  getCategory,
} from "../../../../stores/action/categoriesAction";

class AddRecipeModal extends Component {
  state = {
    modal: false,
    nombre: "",
    idcategoria_producto: 2,
    idubicacion: 1,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  componentDidMount() {
    this.props.getPlace();
    this.props.getCategory();
  }

  onSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      nombre: this.state.nombre,
      idcategoria_producto: this.state.idcategoria_producto,
      idubicacion: this.state.idubicacion,
    };

    // console.log(newRecipe);

    //agregar receta por addRecipe action
    this.props.addRecipe(newRecipe);

    //close modale
    this.toggle();
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { place, categories } = this.props;
    if (this.props.isLoading) {
      return <div></div>;
    }
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
                <Label for="nombre">Nombre de la receta</Label>
                <Input
                  type="text"
                  name="nombre"
                  id="nombre"
                  placeholder="Agregar el nuevo nombre de la receta"
                  onChange={this.onChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="idcategoria_producto">Ubicacion</Label>
                <Input
                  type="select"
                  name="idubicacion"
                  id="idubicacion"
                  onChange={this.onChange}
                >
                  {place.map((p) => (
                    <option value={p.idubicacion}>
                      {`${p.letra}-${p.numero}`}{" "}
                    </option>
                  ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="comentario">Categoria</Label>
                <Input
                  type="select"
                  name="idcategoria_producto"
                  id="idcategoria_producto"
                  placeholder="Agregar el comentario"
                  onChange={this.onChange}
                >
                  {categories.map((c) => (
                    <option value={c.idcategoria_producto}>{c.nombre}</option>
                  ))}
                </Input>
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

const mapStateToProps = (state) => ({
  place: state.categoria.place,
  categories: state.categoria.categories,
});

export default connect(mapStateToProps, { addRecipe, getPlace, getCategory })(
  AddRecipeModal
);
