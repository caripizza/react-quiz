import React from 'react';
import PropTypes from 'prop-types';

/*
Presentational/Functional component
takes text, color and backgroundColor props
Should display text
Should change color and backgroundColor based on props
HINT: Use <div style={{ width: '100px', height: '100px' }}> to pass in styles
*/

const Shape = ({ text, color, backgroundColor }) => {
  return (
    <div style={{
      color,
      backgroundColor,
      width: '100px',
      height: '100px'
    }}>
      <h3>{text}</h3>
    </div>
  );
};

Shape.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default Shape;
