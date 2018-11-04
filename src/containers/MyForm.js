import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class MyForm extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input id="title" />
        </FormGroup>
        <FormGroup>
          <Label for="shortDescription">Short description</Label>
          <Input type="textarea" id="shortDescription" />
        </FormGroup>
        <FormGroup>
          <Label for="fullDescription">Full description</Label>
          <Input type="textarea" id="fullDescription" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

MyForm.propTypes = {};

export default MyForm;