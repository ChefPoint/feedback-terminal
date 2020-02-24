/* * */
/* IMPORTS */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Player from "../animation/Player";
import animation from "../animation/files/hotel-tag-404.json";
import Button from "../forms/inputs/Button";

/* * */
/* * * * */
class NotFound extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Player animationData={animation} speed={0.3} />
          </Col>
          <Col>
            <Row className="my-5 py-5">
              <Col>
                <h1 style={{ fontSize: 60, fontWeight: 700 }}>Oops...</h1>
                <h4>There's nothing to see here.</h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3 className="text-secondary">
                  <strong>Go to:</strong>
                </h3>
                <div className="mt-4">
                  <Button
                    label="In Store Feedback"
                    onClick={() => window.location.replace("/POSF")}
                  />
                  <p className="my-2" style={{ fontSize: 12 }}>
                    The place to provide us feedback about your daily store
                    experience.
                  </p>
                </div>
                <div className="mt-4">
                  <Button
                    label="Feedback Dashboard"
                    onClick={() => window.location.replace("/dashboard")}
                  />
                  <p className="my-2" style={{ fontSize: 12 }}>
                    Here you can view, analise and understand the data gathered
                    from the Feedback Collection Systems. Login is required.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

/* * */
export default NotFound;
