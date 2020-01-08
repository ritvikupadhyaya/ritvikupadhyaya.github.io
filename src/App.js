import React, { Component } from 'react';
import Particles from 'react-particles-js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/*
            <img src={logo} className="App-logo" alt="logo" />
          */}
          <div className="App-title">
            Ritvik Upadhyaya
          </div>
          <div className="App-subtitle">
            <span className="App-subtitle-animation delay-half">Engineer. </span>
            <span className="App-subtitle-animation delay-one">Student. </span>
            <span className="App-subtitle-animation delay-onehalf">Nomad.</span>
          </div>
          {/*
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          */}
        </div>
      </div>
    );
  }
}

export default App;
