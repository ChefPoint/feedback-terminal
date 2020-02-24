/* * */
/* IMPORTS */
import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Player from "../../../common/animation/Player";
import animation from "../../../common/animation/files/bench.json";

/* * */
/* * * * */
const POSFThankYouHeading1 = () => {
  return (
    <React.Fragment>
      <Player animationData={animation} height={200} speed={0.6} loop={false} />
      <Row className="text-center my-5">
        <Col>
          <h2>We are sorry you feel this way.</h2>
          <h1>Please tell us where to improve.</h1>
          <h4 className="mt-4">
            You can always send us an email to{" "}
            <strong>feedback@boca.cafe</strong>
          </h4>
        </Col>
      </Row>
    </React.Fragment>
  );
};

/* * */
export default POSFThankYouHeading1;
