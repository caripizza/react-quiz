import React, { Component } from 'react';
import ColorSelector from './ColorSelector';
import TextSelector from './TextSelector';

export default class App extends Component {
  state = {
    text: 'default text'
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { text } = this.state;
    return (
      < >
        <h1>React Quiz</h1>
        <ColorSelector onChange={this.handleChange}/>
        <TextSelector text={text} onChange={this.handleChange}/>
      </>
    );
  }
}
