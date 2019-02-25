import React from 'react';
import renderer from 'react-test-renderer';
import ColorSelector from './ColorSelector';

describe('ColorSelector', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <ColorSelector onChange={jest.fn()}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
