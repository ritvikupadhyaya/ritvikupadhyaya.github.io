import React, { Component } from "react";
class Background extends Component {

    constructor(props) {
      super(props);
    }

    render() {
        const stylesObj = {
          background: this.props.Color,
          height: '100vh'
        };
        return (
            <div id="Background" style={stylesObj}>
            </div>
        );
    }
}

export default Background;
