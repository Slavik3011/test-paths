import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';
import firestore from '../firestoreSettings';
import { closeModal } from '../actions';

class MyForm extends Component {
  state = {
    title: '',
    shortDescription: '',
    fullDescription: '',
  };

  onChangeHandler(key, value) {
    this.setState({
      [key]: value
    })
  }

  addPath = () => {
    const { title, shortDescription, fullDescription } = this.state;
    const { closeModal } = this.props;

    firestore.collection("paths").add({
      title,
      shortDescription,
      fullDescription,
      length: 1,
      favorite: false,
      markers: []
    })
      .then(() => {
        closeModal();
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    const { title, shortDescription, fullDescription } = this.state;
    return (
      <Form>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input id="title" value={title} onChange={(e) => this.onChangeHandler('title', e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label for="shortDescription">Short description</Label>
          <Input type="textarea" id="shortDescription" value={shortDescription} onChange={(e) => this.onChangeHandler('shortDescription', e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label for="fullDescription">Full description</Label>
          <Input type="textarea" id="fullDescription" value={fullDescription} onChange={(e) => this.onChangeHandler('fullDescription', e.target.value)} />
        </FormGroup>
        <Button onClick={this.addPath}>Add path</Button>
      </Form>
    );
  }
}

MyForm.propTypes = {};

export default connect(null, { closeModal })(MyForm);