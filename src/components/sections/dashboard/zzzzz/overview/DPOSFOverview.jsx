/* * */
/* IMPORTS */
import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import DPOSFScoreGraph from "./DPOSFScoreGraph";
import DTimeframeSelector from "../../common/DTimeframeSelector";
import DLocationSelector from "../../common/DLocationSelector";
import DHeading from "../../common/DHeading";
import Player from "../../../../common/animation/Player";
import animation from "../../../../common/animation/files/loading-dots.json";

/* * */
/* * * * */
class DPOSFOverview extends React.Component {
  state = {
    loading: false,
    params: { location: null, startDate: null, endDate: null }
  };

  render() {
    return (
      <Container className="my-5">
        <DHeading text="POSF Overview" />

        {this.state.loading && (
          <Row>
            <Col>
              <Player animationData={animation} height={157} />
            </Col>
          </Row>
        )}

        <Row
          className="my-5"
          // style={{ display: this.state.loading ? "none" : "" }}
        >
          <Col>
            <DLocationSelector
              onSelect={selection => {
                this.setState({
                  params: { ...this.state.params, location: selection }
                });
              }}
            />
          </Col>
          <Col>
            <DTimeframeSelector
              onSelect={({ startDate, endDate }) =>
                this.setState({
                  params: { ...this.state.params, startDate, endDate }
                })
              }
            />
          </Col>
        </Row>

        <DPOSFScoreGraph
          params={this.state.params}
          isLoading={status => {
            if (this.state.loading !== status)
              this.setState({ loading: status });
          }}
        />
      </Container>
    );
  }
}

/* * */
export default DPOSFOverview;
