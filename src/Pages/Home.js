import React, { Component } from 'react';
import Particles from 'react-particles-js';
import '../App.scss';
import CreativeTitle from '../components/CreativeTitle';
import FadeInSubtitle from '../components/FadeInSubtitle';

class Home extends Component {
  render() {
    const subtitleFadeDuration = 700;
    const subtitleFadeInitialDelay = 200;
    const subtitlesToFadeIn = ["Engineer. ", "Photographer. ", "Nomad."];

    const subtitlesToRender = subtitlesToFadeIn.map((subtitle, index) =>
      <FadeInSubtitle key={subtitle}
                      title={subtitle}
                      animDelay={subtitleFadeInitialDelay + index*subtitleFadeDuration}
                      animDuration={subtitleFadeDuration}/>
    );

    return (
      <div className="App">
        <div className="App-header">
          <CreativeTitle className="App-title" title="Ritvik Upadhyaya"/>
          <div className="App-subtitle">
            {subtitlesToRender}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
