import React, { useState } from "react";
import { Button, Modal, ModalHeader,  ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { deleteMateriaPrima } from "../../../stores/action/materiaPrima";

function DeleteRecetaDetalle({ idProducto, idMateria, deleteMateriaPrima }) {
  const onDelete = (e) => {
    e.preventDefault();
    deleteMateriaPrima(idProducto, idMateria);
    toggle()
  };
  let [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <>
      <Button onClick={toggle} color="danger">
        Eliminar
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          ¿Está seguro que desea eliminar esta materia de la receta?
        </ModalHeader>
        <ModalFooter>
          <Button color="danger" onClick={onDelete}>Si</Button>
          <Button color="success" onClick={toggle}>No</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default connect(null, { deleteMateriaPrima })(DeleteRecetaDetalle);
