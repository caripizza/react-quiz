import React from 'react';
import PropTypes from 'prop-types';

/*
Presentational/Functional component
Color input to change font color
Color input to change background color
*/

const ColorSelector = ({ color, backgroundColor, onChange }) => {
  return (
    <div>
      <label>
        Choose a font color:<br/>
        <input type="color" name="color" value={color} onChange={onChange}/>
      </label>
      <br/>
      <label>
        Choose a background color:<br/>
        <input type="color" name="backgroundColor" value={backgroundColor} onChange={onChange}/>
      </label>
    </div>
  );
};

ColorSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

ColorSelector.defaultProps = {
  color: '#ffffff',
  backgroundColor: '#000000'
};

export default ColorSelector;
