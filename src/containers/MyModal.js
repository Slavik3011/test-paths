import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from "react-redux";
import { toggleModal } from "../actions";

const MyModal = ({ modal, toggleModal }) => (
  <Modal isOpen={modal} toggle={toggleModal}>
    <ModalHeader toggle={toggleModal}>Add new path</ModalHeader>
    <ModalBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </ModalBody>
  </Modal>
);

export default connect(
  (({ modal }) => ({ modal })),
  { toggleModal }
)(MyModal);