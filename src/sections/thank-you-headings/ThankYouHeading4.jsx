/* * */
/* IMPORTS */
import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Player from "../../components/animation/Player";
import animation from "../../components/animation/files/biking-is-cool.json";

/* * */
/* * * * */
const ThankYouHeading4 = () => {
  return (
    <React.Fragment>
      <Player animationData={animation} height={200} />
      <Row className="text-center my-5">
        <Col>
          <h1>Thank you so much for your answer!</h1>
          <br />
          <h3>It really means a lot to us that you are happy.</h3>
        </Col>
      </Row>
    </React.Fragment>
  );
};

/* * */
export default ThankYouHeading4;
