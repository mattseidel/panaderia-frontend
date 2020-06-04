import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";
import { connect } from "react-redux";
import { addMateriaPrima } from "../../../stores/action/materiaPrima";
import { clearErrors } from "../../../stores/action/errorAction";

function AddRecipe({ id, materiaPrima, addMateriaPrima, msg, clearErrors }) {
  let [modal, setModal] = useState(false);
  let [receta, setReceta] = useState({
    idProducto: id,
    idMateria: 1,
    cantidad: "",
    comentarios: "",
  });
  let [error, setError] = useState({ msg: "", status: "", id: "" });

  useEffect(() => {
    if (msg.status != null) {
      setError(msg);
    } else {
      setError({ msg: "", status: "", id: "" });
    }
  }, [msg]);
  const toggle = () => {
    setModal(!modal);
    clearErrors();
  };
  const onChange = (e) => {
    setReceta({ ...receta, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addMateriaPrima(receta);
  };
  return (
    <>
      <Button onClick={toggle}>Agregar nueva receta</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Agregar nueva receta</ModalHeader>
        <Form onSubmit={onSubmit}>
          <ModalBody>
            <FormGroup>
              <Label>Materia Prima</Label>
              <Input type="select" name="idMateria" onChange={onChange}>
                {materiaPrima.map((m) => (
                  <option value={m.idProducto}>{m.nombre}</option>
                ))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label>Cantidad</Label>
              <Input
                type="text"
                name="cantidad"
                id="cantidad"
                onChange={onChange}
                required
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Comentarios</Label>
              <Input
                type="textarea"
                name="comentarios"
                id="comentarios"
                onChange={onChange}
                required
              />
            </FormGroup>
            {error.status ? (
              <Alert color="danger">
                <h4 className="alert-heading">Error {error.status} </h4>
                <p>{error.msg.msg}
                </p>
              </Alert>
            ) : null}
            <ModalFooter>
              <Button>Agregar</Button>
            </ModalFooter>
          </ModalBody>
        </Form>
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => ({
  msg: state.error,
});

export default connect(mapStateToProps, { addMateriaPrima, clearErrors })(
  AddRecipe
);
