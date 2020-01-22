import React, { Component } from 'react';
import Particles from 'react-particles-js';
import logo from './logo.svg';
import './App.css';
import CreativeTitle from './components/CreativeTitle';
import FadeInSubtitle from './components/FadeInSubtitle';

class App extends Component {
  render() {
    const subtitleFadeDuration = 700;
    const subtitleFadeInitialDelay = 200;
    const subtitlesToFadeIn = ["Engineer. ", "Photographer. ", "Nomad."];
    
    const subtitlesToRender = subtitlesToFadeIn.map((subtitle, index) =>
      <FadeInSubtitle title={subtitle}
                      animDelay={subtitleFadeInitialDelay + index*subtitleFadeDuration}
                      animDuration={subtitleFadeDuration}/>
    );

    return (
      <div className="App">
        <div className="App-header">
          {/*
            <img src={logo} className="App-logo" alt="logo" />
          */}
          <CreativeTitle className="App-title" title="Ritvik Upadhyaya"/>
          <div className="App-subtitle">
            {subtitlesToRender}
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
