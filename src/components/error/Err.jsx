/* * */
/* IMPORTS */
import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Reloader from "../reloader/Reloader";

import Player from "../animation/Player";
import animation from "../animation/files/floating-ninja.json";

/* * */
/* * * * */
export default class Err extends React.Component {
  /* * */
  /* PROPERTIES */

  // Store Location where POSF collection is taking place
  location = this.props.match.params.location;

  /* * */
  /* */

  /* function: render */
  // This method should be pure, i.e. it should only return
  // components to be rendered. No logic should be present.
  render() {
    return (
      <React.Fragment>
        <Reloader speed={3} path={"/" + this.location} />
        <Container>
          <Row className="text-center my-3">
            <Col>
              <Player
                animationData={animation}
                speed={0.8}
                height={200}
                onComplete={this.restartApp}
              />
            </Col>
          </Row>
          <Row className="text-center my-3">
            <Col>
              <h1>An unexpected error occurred.</h1>
              <br />
              <h2>Please try again.</h2>
              <br />
              <h4>
                If the error persists please inform the shop or send an email to{" "}
                <strong>feedback@boca.cafe</strong>
              </h4>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
