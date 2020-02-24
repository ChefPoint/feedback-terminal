import React, { Component } from "react";
import Select from "react-select";

class Multiselect extends Component {
  handleMultiselectChange = (name, value) => {
    if (!value) value = [];
    this.props.onChange({ currentTarget: { name: name, value: value } });
  };

  render() {
    const { name, label, params, options, defaultValue, error } = this.props;
    return (
      <div className={this.props.className + " form-group"}>
        {label && <label htmlFor={name}>{label}</label>}
        <Select
          isMulti={this.props.isMulti}
          isClearable
          placeholder={this.props.placeholder}
          onChange={newValue => this.handleMultiselectChange(name, newValue)}
          getOptionValue={opt => opt[params.value]}
          getOptionLabel={opt => opt[params.label]}
          options={options}
          defaultValue={defaultValue}
          className="text-lg"
          isDisabled={this.props.disabled}
        />
        {error && (
          <div className="text-danger mt-2" style={{ fontSize: 15 }}>
            {error}
          </div>
        )}
      </div>
    );
  }
}

export default Multiselect;
