import React, { useState } from "react";
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
} from "reactstrap";
import { connect } from "react-redux";
import { addMateria } from "../../../stores/action/materiaPrima";

function AddMateriaPrima({ addMateria, ubicacion }) {
  const [modal, setModal] = useState(false);
  const [materia, setMateria] = useState({ nombre: "", idubicacion: 1 });
  const onChange = (e) =>
    setMateria({ ...materia, [e.target.name]: e.target.value });
  const toggle = () => setModal(!modal);
  const onSubmit = (e) => {
    e.preventDefault();
    addMateria(materia);
  };
  return (
    <div>
      <Button onClick={toggle} className="button delete-button m-2">Nueva materia prima </Button>
      <Modal toggle={toggle} isOpen={modal}>
        <ModalHeader>Nueva materia prima</ModalHeader>
        <Form onSubmit={onSubmit}>
          <ModalBody>
            <FormGroup>
              <Label>Nombre</Label>
              <Input
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Agregar el nombre a la materia prima"
                onChange={onChange}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label>Nombre</Label>
              <Input
                type="select"
                name="idubicacion"
                id="idubicacion"
                onChange={onChange}
              >
                {ubicacion.map((u) => (
                  <option value={u.idubicacion}>
                    {`${u.letra} - ${u.numero}`}{" "}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="success" className="button delete-button">Agregar nuevo producto</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
}

export default connect(null, { addMateria })(AddMateriaPrima);
