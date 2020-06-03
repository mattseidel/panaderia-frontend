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
  NavLink
} from "reactstrap";
import "./style.css";
import { connect } from "react-redux";
import { login } from "../../../stores/action/authActions";
import PropTypes from 'prop-types'

class Login extends Component {
  state = {
    modale: false,
    nombreUsuario: "",
    contraseña: "",
    msg: null,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  static PorprTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,

  }

  onsSubmit = e => {
    e.preventDefault();
    const user = {
      nombreUsuario: this.state.nombreUsuario,
      contraseña: this.state.contraseña,
    };
    this.props.login(user);
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <Button className="button" onClick={this.toggle}>
          <i class="fas fa-sign-in-alt"></i> Ingresar
        </Button>
        <Modal isOpen={this.state.modal} togle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Ingresar</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onsSubmit}>
              <FormGroup>
                <Label for="nombreUsuario">Nombre de usuario</Label>
                <Input
                  type="text"
                  name="nombreUsuario"
                  id="nombreUsuario"
                  placeholder="Agrega tu nombre de usuario"
                  onChange={this.onChange}
                  required
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="contraseña">Contraseña</Label>
                <Input
                  type="password"
                  name="contraseña"
                  placeholder="Ingrese la contraseña"
                  onChange={this.onChange}
                  required
                ></Input>
                <Button block className="login-button">
                  Login
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { login })(Login);
