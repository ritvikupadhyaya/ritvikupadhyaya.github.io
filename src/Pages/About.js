import React, { Component } from 'react';
import '../Styles/About.scss'

class About extends Component {
  render() {
    return (
      <div>
        <div className="Page-Content">
          <div className="About-Content">
            <a><img src="https://res.cloudinary.com/dpulfhdd4/image/upload/c_scale,q_100,w_500/v1539451777/Antelope/Antelope-7.jpg" title="Placeholder" /></a>
            <div className="About-Text">
              <div className="About-Title">
                <h1>About Me</h1>
              </div>
              <div className="About-Description">
              There needs to be a long sentence to make sure that the header stays aligned correctly.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
