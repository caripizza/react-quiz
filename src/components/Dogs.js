import React from 'react';
import PropTypes from 'prop-types';
import Dog from './Dog';

function Dogs({ dogs }) {
  const listOfDogs = dogs.map((dog, idx) => {
    return (
      <li key={idx}>
        <Dog name={dog.name}
          age={dog.age}
          weight={dog.weight}
        />
      </li>
    );
  });
  return (
    <ul>{listOfDogs}</ul>
  );
}

Dogs.propTypes = {
  dogs: PropTypes.array.isRequired
};

export default Dogs;
