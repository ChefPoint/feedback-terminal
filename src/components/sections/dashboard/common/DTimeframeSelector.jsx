/* * */
/* IMPORTS */
import React from "react";
import DatePicker from "../../../common/forms/inputs/DatePicker/DatePicker";

/* * */
/* * * * */
class DTimeframeSelector extends React.Component {
  // State with necessary properties
  state = { startDate: null, endDate: null };

  render() {
    return (
      <React.Fragment>
        <h5 className="text-center mb-3">Select a date range</h5>
        <DatePicker
          // placeholder={{
          //   startDate: Date.now(),
          //   endDate: Date.now()
          // }}
          className="sh-light animate"
          name="timeframe"
          onChange={({ startDate, endDate }) => {
            // Transform moment.js date objects to strings
            startDate = startDate ? startDate.toISOString() : null;
            endDate = endDate ? endDate.toISOString() : null;
            this.setState({ startDate, endDate });
            this.props.onSelect({ startDate, endDate });
          }}
        />
      </React.Fragment>
    );
  }
}

/* * */
export default DTimeframeSelector;
