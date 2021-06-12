import React from 'react';
import {
  Link, BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import {
  Button, Navbar, Nav, Container,
} from 'react-bootstrap';
import Channels from './components/Channels.jsx';
import Form from './components/Form.jsx';

const NoMatchPage = () => { <h3>404 - Not found</h3>; };

const App = () => {
  return (
    <>
      <Router>
        <Container>
          <Navbar bg="dark" variant="dark" expand="true" gy-5>
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
