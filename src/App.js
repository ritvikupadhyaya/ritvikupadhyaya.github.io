import React, { Component } from 'react';
import Particles from 'react-particles-js';
import logo from './logo.svg';
import './App.css';
import CreativeTitle from './components/CreativeTitle';
import FadeInSubtitle from './components/FadeInSubtitle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/*
            <img src={logo} className="App-logo" alt="logo" />
          */}
          <CreativeTitle className="App-title" title="Ritvik Upadhyaya"/>
          <div className="App-subtitle">
            <FadeInSubtitle title="Engineer. " animDelay={200} animDuration={700}/>
            <FadeInSubtitle title="Student. " animDelay={900} animDuration={700}/>
            <FadeInSubtitle title="Nomad." animDelay={1600} animDuration={700}/>
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
