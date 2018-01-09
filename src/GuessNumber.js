import React, { Component } from 'react';
import { API } from 'aws-amplify';

class GuessNumber extends Component {

  state = { answer: null };

  async makeGuess() {
    const guess = parseInt(this.refs.guess.value,10);
    const body = { guess }
    const { result } = await API.post('Guesses', '/number', { body });
    this.setState({
      answer: result
    });
  }

  render() {
    let prompt = "";
    const answer = this.state.answer;
    console.log('answer: ', answer);

    switch (answer) {
      case "high":
        prompt = "Too high; guess a lower number.";
        break;
      case "low":
        prompt = "Too low; guess a higher number.";
        break;
      case "correct":
        prompt = `Correct! The number is ${this.refs.guess.value}!`;
        break;
      default:
        prompt = "Guess a number between 1 and 100."
    }

    return (
      <div style={styles}>
        <h1>Guess The Number</h1>
        <p>{ prompt }</p>

        <input ref="guess" type="text" />
        <button type="submit" onClick={this.makeGuess.bind(this)}>Guess</button>
      </div>
    )

  }
}

let styles = {
  margin: "0 auto",
  // width: "30%"
};

export default GuessNumber;
