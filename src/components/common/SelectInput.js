import React, { PropTypes } from 'react';

const SelectInput = ({ name, label, value, defaultOption, options, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <select
          name={name}
          value={value}
          className="form-control"
          onChange={onChange}>
          <option value="">{defaultOption}</option>
          {options.map((option, idx) => {
            return <option key={idx} value={option.value}>{option.text}</option>;
          })}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.string,
  defaultOption: PropTypes.string,
  error: PropTypes.string
};

export default SelectInput;