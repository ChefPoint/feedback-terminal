/* * */
/* IMPORTS */
import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/* * */
/* * * * */
class DLandingText extends React.Component {
  render() {
    return (
      <Row className="mt-5">
        <Col>
          <h3>
            {/* style={{ fontSize: 21 }} */}
            <strong>Welcome to Feedback Dashboard.</strong>
          </h3>
          <br />
          <h4>
            Here you can view, analyse and understand the results of your
            Feedback Collection System.
          </h4>
          <br />
          <p style={{ fontSize: 21 }}>
            There are two components currently running: the{" "}
            <em>Point-of-Sale Feedback</em> (POSF) and the{" "}
            <em>Spontaneous Feedback</em> (SF).
          </p>
          <p style={{ fontSize: 21 }}>
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
export default DLandingText;
