import React, { Component } from 'react';
import ColorSelector from './ColorSelector';
import TextSelector from './TextSelector';
import Shape from './Shape';
import NewApp from './NewApp';

export default class App extends Component {
  state = {
    text: 'default text',
    color: '#ffffff',
    backgroundColor: '#000000'
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { text } = this.state;
    return (
      < >
        <h1>React Quiz</h1>
        <ColorSelector {...this.state} onChange={this.handleChange}/>
        <TextSelector text={text} onChange={this.handleChange}/>
        <Shape  {...this.state}/>
        <NewApp/>
      </>
    );
  }
}
