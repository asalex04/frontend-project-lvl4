import React from 'react';
import {
  Link, BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import {
  Button, Navbar, Nav, Container, Col, Row,
} from 'react-bootstrap';
import Channels from './components/Channels.jsx';
import Form from './components/Form.jsx';

const NoMatchPage = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto" className="pt-5">
          <h3>404 - Not found</h3>
        </Col>
      </Row>
    </Container>
  );
};

const App = () => {
  return (
    <>
      <Router>
        <Container>
          <Navbar bg="dark" variant="dark" expand="true">
            <Navbar.Brand as={Link} to="/">Hexlet Chat</Navbar.Brand>
            <Nav className="justify-content-end">
              <Button variant="primary">Выйти</Button>
            </Nav>
          </Navbar>
        </Container>
        <Container>
          <Switch>
            <Route exact path="/" component={Channels} />
            <Route path="/login" component={Form} />
            <Route path="*">
              <NoMatchPage />
            </Route>
          </Switch>
        </Container>
      </Router>
    </>
  );
};

export default App;
