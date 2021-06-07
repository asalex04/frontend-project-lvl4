import React from 'react';
import {
  Link, BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Channels from './components/Channels.jsx';
import Form from './components/Form.jsx';

const NoMatchPage = () => (<h3>404 - Not found</h3>);

const App = () => (
  <section className="App">
    <nav className="mb-3 navbar navbar-expand-lg navbar-light bg-light">
      <a className="mr-auto navbar-brand" href="/">Hexlet Chat</a>
      <button type="button" className="btn btn-primary">Выйти</button>
    </nav>
    <Router>
      <Link to="/login">Login</Link>
      <Link to="/">Home</Link>
      <Switch>
        <Route exact path="/" component={Channels} />
        <Route path="/login" component={Form} />
        <Route path="*">
          <NoMatchPage />
        </Route>
      </Switch>
    </Router>
  </section>
);

export default App;
