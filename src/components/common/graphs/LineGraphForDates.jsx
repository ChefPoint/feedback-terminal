/* * */
/* IMPORTS */
import React from "react";
import Chart from "react-apexcharts";

/* * */
/* * * * */
class LineGraphForDates extends React.Component {
  render() {
    return (
      <Chart
        options={{
          chart: {
            toolbar: {
              show: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: "straight"
          },
          grid: {
            row: {
              colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
              opacity: 0.5
            }
          },
          xaxis: {
            type: "datetime"
          }
        }}
        series={this.props.source}
        type="line"
        width="100%"
        height={this.props.height || 500}
      />
    );
  }
}

/* * */
export default LineGraphForDates;
