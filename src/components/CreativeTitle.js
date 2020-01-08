import React, { Component } from 'react';

class CreativeTitle extends Component {
  render() {
    const divStyle = {
          fontFamily: 'Satisfy',
          fontStyle: 'cursive',
        };
    return(
      <div className={this.props.className} style={divStyle}>{this.props.title}</div>
    );
  }
}

export default CreativeTitle;
