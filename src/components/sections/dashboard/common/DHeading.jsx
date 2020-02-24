/* * */
/* IMPORTS */
import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/* * */
/* * * * */
const DHeading = ({ text, className }) => {
  return (
    <Row className="mt-5 pt-5">
      <Col>
        <h1 className={className} style={{ fontSize: 60, fontWeight: 700 }}>
          {text || "Heading"}
        </h1>
        <hr />
      </Col>
    </Row>
  );
};

/* * */
export default DHeading;
