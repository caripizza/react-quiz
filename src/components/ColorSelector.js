import React from 'react';
import PropTypes from 'prop-types';

/*
Presentational/Functional component
Color input to change font color
Color input to change background color
*/

const ColorSelector = ({ onChange }) => {
  return (
    <div>
      <label>
        Choose a font color:<br/>
        <input type="color" name="color" onChange={onChange}/>
      </label>
      <br/>
      <label>
        Choose a background color:<br/>
        <input type="color" name="backgroundColor" onChange={onChange}/>
      </label>
    </div>
  );
};

ColorSelector.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default ColorSelector;
