import React from 'react';
import renderer from 'react-test-renderer';
import TextSelector from './TextSelector';

describe('TextSelector', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <TextSelector text={'hallooo'} onChange={jest.fn()}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
