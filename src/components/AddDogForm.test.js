import React from 'react';
import { shallow } from 'enzyme';
import AddDogForm from './AddDogForm';

describe('AddDogForm', () => {
  it('can add a new dog', () => {
    const addDog = jest.fn();
    const wrapper = shallow(<AddDogForm addDog={addDog}/>);
    wrapper.setState({
      name: 'taco',
      age: '3',
      weight: '30 lbs'
    });
    wrapper.find('form').simulate('submit', {
      preventDefault: jest.fn()
    });
    expect(addDog).toBeCalledWith({
      name: 'taco',
      age: 3,
      weight: '30 lbs'
    });
  });
});
