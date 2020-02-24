/* * */
/* IMPORTS */
import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Player from "../../../common/animation/Player";
import animation from "../../../common/animation/files/happy-dog.json";

/* * */
/* * * * */
const POSFThankYouHeading3 = () => {
  return (
    <React.Fragment>
      <Player animationData={animation} height={180} />
      <Row className="text-center my-5">
        <Col>
          <h1>Thank you for your answer!</h1>
          <br />
          <h3>Tell us how we could have made your experience better.</h3>
        </Col>
      </Row>
    </React.Fragment>
  );
};

/* * */
export default POSFThankYouHeading3;
