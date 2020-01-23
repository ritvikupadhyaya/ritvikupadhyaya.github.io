import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.scss';
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from 'react-bootstrap/Navbar';
import CreativeTitle from './components/CreativeTitle';


class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Navbar>
        <Navbar.Brand href="/">
          <div ><CreativeTitle title="Ritvik Upadhyaya"/></div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Text>
          <a className="navlink" href="/about">About</a>
        </Navbar.Text>
      </Navbar>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
