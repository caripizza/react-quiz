import React, { PureComponent } from 'react';
import AddDogForm from './AddDogForm';
import Dogs from './Dogs';

export default class NewApp extends PureComponent {
  state = {
    dogs: [
      {
        'name': 'b',
        'age': 4,
        'weight': '3 lbs'
      }
    ]
  };

  addDog = dog => {
    this.setState(state => ({
      dogs: [...state.dogs, dog]
    }));
  };

  render() {
    const { dogs } = this.state;
    return (
      < >
        <AddDogForm addDog={this.addDog}/>
        <Dogs dogs={dogs}/>
      </>
    );
  }
}

