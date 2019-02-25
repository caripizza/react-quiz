import React from 'react';
import PropTypes from 'prop-types';

/*
Presentational/Functional component
Text input
*/

const TextSelector = ({ text, onChange }) => {
  return (
    <div>
      <label>
        Enter text:<br/>
        <input type="text" name="text" value={text} onChange={onChange}/>
      </label>
    </div>
  );
};

TextSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default TextSelector;
