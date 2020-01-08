import React, { Component } from 'react';

class CreativeTitle extends Component {
  render() {
    const divStyle = {
          fontFamily: 'Satisfy',
          fontStyle: 'cursive',
        };
    return(
      <div style={divStyle}>{this.props.title}</div>
    );
  }
}

export default CreativeTitle;
