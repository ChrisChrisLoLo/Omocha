import React, { Component } from 'react';
import {
  Container,
  Col,
  Row
} from 'reactstrap';
import Notepad from './components/notepad/index';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <h1>
            Omocha
          </h1>
        </Row>
        <Row>
          <Col>
            <Notepad />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
