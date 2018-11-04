import React from 'react';
import { Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';
import { connect } from "react-redux";
import { toggleModal } from "../actions";
import MyForm from "./MyForm";

const MyModal = ({ modal, toggleModal }) => (
  <Modal isOpen={modal} toggle={toggleModal} className="modal-lg">
    <ModalHeader toggle={toggleModal}>Add new path</ModalHeader>
    <ModalBody>
      <Row>
        <Col md={6}>
          <MyForm />
        </Col>
        <Col md={6}>

        </Col>
      </Row>
    </ModalBody>
  </Modal>
);

export default connect(
  (({ modal }) => ({ modal })),
  { toggleModal }
)(MyModal);