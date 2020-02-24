/* * */
/* IMPORTS */
import React from "react";
import Settings from "get-settings";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Reloader from "../../../utils/Reloader";

import Player from "../animation/Player";
import animation from "../../common/animation/files/floating-ninja.json";

/* * */
/* * * * */
class UnexpectedError extends React.Component {
  /* * */
  /* PROPERTIES */

  // Store Location where POSF collection is taking place
  location = this.props.match.params.location;

  // How much time of inactivity is allowed before app restart
  maxInactiveTimeAllowed = Settings.get("POSF.max-inactive-time-allowed") / 3;

  /* * */
  /* */

  /* function: render */
  // This method should be pure, i.e. it should only return
  // components to be rendered. No logic should be present.
  render() {
    return (
      <React.Fragment>
        <Reloader
          seconds={this.maxInactiveTimeAllowed}
          path={"/POSF/" + this.location}
        />
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

/* * */
export default UnexpectedError;
