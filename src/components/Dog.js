import React from 'react';
import PropTypes from 'prop-types';

function Dog({ name, age, weight }) {
  return (
    < >
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
      <h3>Weight: {weight}</h3>
    </>
  );
}

Dog.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  weight: PropTypes.string.isRequired
};

export default Dog;
