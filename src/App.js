import React, { Component } from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import './App.css';
import Game from './Game';

class App extends Component {
  render() {
    return (
      <Game />
    );
  }
}

export default withAuthenticator(App);
