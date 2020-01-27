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

    const particlesOptions = {
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	};

    return (
        <div className="Page-Content">
        <div className="Particles-background">
          <Particles params={particlesOptions}/>
        </div>
        <div style={{textAlign: "center"}}>
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
