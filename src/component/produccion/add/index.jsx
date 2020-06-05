import React, { useState, useEffect } from "react";
import { Collapse, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addProduccion } from '../../../stores/action/produccionAction'
import {connect} from "react-redux";

function AddProduccion({recetas, addProduccion}) {
  const [isOpen, setIsOpen] = useState(false);
  const [produccion, setReceta] = useState({
    idProducto: '',
    cantidad_pedida: "",
    masa: "",
  });

  useEffect(()=>{
    setReceta({idProducto: recetas[0].idProducto})
  },[recetas])

  const toggle = () => setIsOpen(!isOpen);
  const onChange = (e) => {
    setReceta({ ...produccion, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(produccion);
    
    addProduccion(produccion)
    cancelCourse();
  };
  const cancelCourse = () => {
    document.getElementById("add-produccion-form").reset();
  };

  return (
    <>
      <Button onClick={toggle} block className="button delete-button">
        Agregar producción
      </Button>
      <Collapse isOpen={isOpen}>
        <Form onSubmit={onSubmit} className="mb-2" id="add-produccion-form">
          <FormGroup>
            <Label>Producto</Label>
            <Input
              name="idProducto"
              id="idProducto"
              type="select"
              onChange={onChange}
            >
              {recetas.map((d) => (
                <option value={d.idProducto}> {d.nombre} </option>
              ))}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>Cantidad</Label>
            <Input
              name="cantidad_pedida"
              id="cantidad_pedida"
              type="number"
              onChange={onChange}
              required
              placeholder="20"
              min="1"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Masa</Label>
            <Input
              name="masa"
              id="masa"
              type="number"
              onChange={onChange}
              required
              placeholder="50"
              min="1"
            ></Input>
          </FormGroup>
          <Button className="button delete-button" block>
            Agregar
          </Button>
        </Form>
      </Collapse>
    </>
  );
}

export default connect(null, { addProduccion }) (AddProduccion);
