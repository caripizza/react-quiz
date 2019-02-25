import React from 'react';
import renderer from 'react-test-renderer';
import Shape from './Shape';

describe('Shape', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Shape color="red" backgroundColor="blue" text="hi"/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
