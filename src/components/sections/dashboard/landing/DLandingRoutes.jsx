/* * */
/* IMPORTS */
import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import DLandingRoutesCard from "./DLandingRoutesCard";
import animationForPOSF from "../../../common/animation/files/floating-plaques.json";
import animationForSF from "../../../common/animation/files/floating-bars.json";

/* * */
/* * * * */
class DLanding extends React.Component {
  render() {
    return (
      <Row>
        <Col>
          <DLandingRoutesCard
            label="Point-of-Sale Feedback"
            animation={animationForPOSF}
            onClick={() =>
              window.location.assign("/dashboard/instore/overview")
            }
          />
        </Col>
        <Col>
          <DLandingRoutesCard
            label="Spontaneous Feedback"
            animation={animationForSF}
            onClick={() => window.location.assign("/dashboard/instore/inbox")}
          />
        </Col>
      </Row>
    );
  }
}

/* * */
export default DLanding;
