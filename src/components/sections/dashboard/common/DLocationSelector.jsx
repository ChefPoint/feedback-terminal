/* * */
/* IMPORTS */
import React from "react";
import Multiselect from "../../../common/forms/inputs/Multiselect";
import POSFService from "../../../../services/POSFService";

/* * */
/* * * * */
class DLocationSelector extends React.Component {
  // State with necessary properties
  state = { locations: [] };

  async componentDidMount() {
    // Get available locations from server
    const { data } = await POSFService.get("locations");

    // Create an object for each element returned
    data.forEach((element, index, array) => {
      array[index] = { label: element };
    });

    this.setState({ locations: data });
  }

  render() {
    return (
      <React.Fragment>
        <h5 className="text-center mb-3">Select a store location</h5>
        <Multiselect
          className="sh-light animate"
          placeholder="Available stores..."
          options={this.state.locations}
          params={{ value: "label", label: "label" }}
          disabled={this.props.disabled}
          onChange={({ currentTarget }) => {
            this.props.onSelect(currentTarget.value.label);
          }}
        />
      </React.Fragment>
    );
  }
}

/* * */
export default DLocationSelector;
