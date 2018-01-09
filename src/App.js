import React, { Component } from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import './App.css';
import Game from './Game';
import Todos from './Todos';
import ImageViewer from './ImageViewer';
import GuessNumber from './GuessNumber';

class App extends Component {
  render() {
    return (
      <div>
        <Game />
        <Todos />
        <ImageViewer />
        <GuessNumber />
      </div>
    );
  }
}

export default withAuthenticator(App);
// export default App;
