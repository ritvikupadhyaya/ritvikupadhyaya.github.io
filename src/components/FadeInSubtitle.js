import React, { Component } from 'react';
import {Spring} from 'react-spring/renderprops';


class FadeInSubtitle extends Component {
  render() {
    const animConfig = { delay: this.props.animDelay, duration: this.props.animDuration};
    return (
      <Spring
        from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={animConfig}>
          {props => <span style={props}>{this.props.title}</span>}
      </Spring>
    );
  }
}

export default FadeInSubtitle;
