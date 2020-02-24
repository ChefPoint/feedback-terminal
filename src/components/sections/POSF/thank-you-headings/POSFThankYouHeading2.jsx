/* * */
/* IMPORTS */
import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Player from "../../../common/animation/Player";
import animation from "../../../common/animation/files/retro-bike.json";

/* * */
/* * * * */
const POSFThankYouHeading2 = () => {
  return (
    <React.Fragment>
      <Player animationData={animation} height={150} />
      <Row className="text-center my-5">
        <Col>
          <h1>Thank you. We want to get better.</h1>
          <br />
          <h3>Please tell us where to improve.</h3>
        </Col>
      </Row>
    </React.Fragment>
  );
};

/* * */
export default POSFThankYouHeading2;
