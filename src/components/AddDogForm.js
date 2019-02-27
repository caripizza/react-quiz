import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class AddDogForm extends PureComponent {
  static propTypes = {
    addDog: PropTypes.func.isRequired
  };

  state = {
    name: '',
    age: '',
    weight: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, age, weight } = this.state; 
    this.props.addDog({ name, age: Number.parseInt(age), weight });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { name, age, weight } = this.state; 

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name<br/>
          <input type="text" 
            name="name" 
            value={name}
            onChange={this.handleChange}/>
        </label>
        <br/>
        <label>
          Age<br/>
          <input type="number" 
            name="age" 
            value={age}
            onChange={this.handleChange}/>
        </label>
        <br/>
        <label>
          Weight<br/>
          <input type="text" 
            name="weight" 
            value={weight}
            onChange={this.handleChange}/>
        </label>
        <br/>
        <button>Add</button>
      </form>
    );
  }
}

export default AddDogForm;
