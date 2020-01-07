import React, { Component } from "react";
import './App.css';
import Background from '../Background/Background.js';

class App extends Component {
    render() {
        return (
            <Background Color="GRAY">
              {<h1>My React App</h1>}
            </Background>
        );
    }
}

export default App;
