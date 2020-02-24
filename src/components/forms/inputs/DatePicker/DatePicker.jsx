/* * */
/* IMPORTS */
import React from "react";

import moment from "moment";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./DatePicker.css";
import { DateRangePicker, isInclusivelyBeforeDay } from "react-dates";

/* * */
/* * * * */
class DatePicker extends React.Component {
  state = {
    dates: { startDate: null, endDate: null },
    focusedInput: null
  };

  render() {
    const { name, label, error } = this.props;
    return (
      <div className={this.props.className}>
        {label && (
          <label htmlFor={name} className="m-1">
            {label}
          </label>
        )}
        <DateRangePicker
          block
          isOutsideRange={day =>
            !isInclusivelyBeforeDay(day, moment().add(1, "day"))
          }
          firstDayOfWeek={1}
          startDate={this.state.dates.startDate}
          startDateId={"startDateFor-" + name}
          endDate={this.state.dates.endDate}
          endDateId={"endDateFor-" + name}
          onDatesChange={dates => {
            this.setState({ dates });
            this.props.onChange(dates);
          }}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
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

/* * */
export default DatePicker;
