import React, { Component } from 'react';

export default class App extends Component {
  state = {
    text: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { text } = this.state;
    return (
      < >
        <h1>App</h1>
      </>
    );
  }
}
