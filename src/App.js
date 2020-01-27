import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './index.scss';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Photos from './Pages/Photos';
import Navbar from 'react-bootstrap/Navbar';
import CreativeTitle from './components/CreativeTitle';


class App extends Component {
  render() {
    const menuBarItemsLinkMap = {
      "Home": "/",
      "About": "/about",
      "Photos": "/photos",
      "Resume": "/resume.pdf",
      "Contact": "/Contact"
    };
    const menuBarItemOpenNewTab = ["Resume"];
    const MenuBar = Object.entries(menuBarItemsLinkMap).map(([key, value]) =>
        <Navbar.Text key={key}>
          <a className="navlink" href={value} target={menuBarItemOpenNewTab.includes(key) ? "_blank" : "_self"}>{key}</a>
        </Navbar.Text>
    );

    return (
      <Router>
      <div>
      <Navbar>
        <Navbar.Brand href="/">
          <div ><CreativeTitle title="Ritvik Upadhyaya"/></div>
        </Navbar.Brand>
        <div className="menuBar">
          {MenuBar}
        </div>
      </Navbar>
        <Switch>
          <Route path="/about"> <About /> </Route>
          <Route path="/contact"> <Contact /> </Route>
          <Route path="/photos"> <Photos /> </Route>
          <Route exact path="/"> <Home /> </Route>
          <Route path="*"> <Redirect to="/" /> </Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
