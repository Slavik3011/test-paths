import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Search from './Search';
import PathList from './PathList';

import Header from '../components/Header';

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Row>
          <Col xs="6">
            <Search />
            <PathList />
          </Col>
          <Col xs="6">.col-6</Col>
        </Row>
      </Container>
    );
  }
}

export default App;
