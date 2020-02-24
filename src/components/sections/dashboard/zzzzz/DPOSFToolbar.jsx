/* * */
/* IMPORTS */
import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { ButtonGroup, Button } from "react-bootstrap";

/* * */
/* * * * */
class DPOSFToolbar extends React.Component {
  render() {
    return (
      <Row className="mt-5 pt-5">
        <Col>
          <Button className="mr-2" variant="light">
            ←
          </Button>
          <ButtonGroup>
            <Button variant="primary">Overview</Button>
            <Button variant="outline-primary">Inbox</Button>
          </ButtonGroup>
        </Col>
      </Row>
    );
  }
}

/* * */
export default DPOSFToolbar;
