import React, { Component } from 'react';
import ColorSelector from './ColorSelector';

export default class App extends Component {
  state = {
    text: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    // const { text } = this.state;
    return (
      < >
        <h1>React Quiz</h1>
        <ColorSelector onChange={this.handleChange}/>
      </>
    );
  }
}
