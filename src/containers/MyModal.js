import React from 'react';
import { Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';
import { connect } from "react-redux";
import { toggleModal } from "../actions";
import MyForm from "./MyForm";
import Map from '../components/Map';
const markers = [{lat: 37.77, lng: -122.447}, {lat: 37.768, lng: -122.311}, {lat: 37.768, lng: -122.511}];

const MyModal = ({ modal, toggleModal }) => (
  <Modal isOpen={modal} toggle={toggleModal} className="modal-lg">
    <ModalHeader toggle={toggleModal}>Add new path</ModalHeader>
    <ModalBody>
      <Row>
        <Col md={6}>
          <MyForm />
        </Col>
        <Col md={6}>
          <Map
            markers={markers}
            draggable={true}
          />
        </Col>
      </Row>
    </ModalBody>
  </Modal>
);

export default connect(
  (({ modal }) => ({ modal })),
  { toggleModal }
)(MyModal);