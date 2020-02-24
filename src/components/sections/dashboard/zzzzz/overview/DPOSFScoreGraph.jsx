/* * */
/* IMPORTS */
import React from "react";

import _ from "lodash";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import POSFService from "../../../../../services/POSFService";
import LineGraphForDates from "../../../../common/graphs/LineGraphForDates";
// import simulate from "../../../../utils/simulate";

/* * */
/* * * * */
class DPOSFScoreGraph extends React.Component {
  // State
  state = { source: [], loading: true };

  // User requested params
  params = this.props.params;

  // Which score values to fetch from server
  scoreValuesToFetch = [1, 2, 3, 4];

  componentDidUpdate() {
    // async componentDidMount() {
    // this.requestDataFromServer();

    // this.setState({ source });
    this.controlAndRequestDataUpdates();
  }

  async controlAndRequestDataUpdates() {
    if (_.isEqual(this.params, this.props.params)) {
      console.log("Not updating");
    } else if (
      this.props.params.location &&
      this.props.params.startDate &&
      this.props.params.endDate
    ) {
      console.log("Updating....");
      console.log(this.props.params.startDate);
      console.log(this.props.params.endDate);
      this.props.isLoading(true);
      await this.requestDataFromServer();
      this.params = this.props.params;
    }
  }

  async requestDataFromServer() {
    // Data array to hold request responses
    const source = [];

    // For each value of score, request its data to the server
    for (const score of this.scoreValuesToFetch) {
      // Perform server request
      const response = await POSFService.get("score/day", {
        ...this.props.params,
        score
      });

      // await simulate.slowNetworkRequest(1000);

      // Push requested data to the array
      source.push({ name: "Score " + score, data: response.data });
    }

    console.log(source);

    this.setState({ source });
    this.props.isLoading(false);
  }

  render() {
    return (
      <Row className="mt-5">
        <Col>
          <h5 className="mt-4">
            <strong>➔ This line graph shows happiness levels over time.</strong>
          </h5>
          <hr />
          <LineGraphForDates source={this.state.source} />
          <p className="my-2" style={{ fontSize: 12 }}>
            Here you can view, analyse and understand the results of your
            Feedback Collection System. Currently there is only one system
            running, and that is the In Store Feedback (POSF) collection system.
            This dashboard intends to be simple to use while presenting useful
            data. This service was built with the goal of improving operations
            by focusing on what the costumer really wants. If you think there is
            a mistake please report it right away.
          </p>
        </Col>
      </Row>
    );
  }
}

/* * */
export default DPOSFScoreGraph;
