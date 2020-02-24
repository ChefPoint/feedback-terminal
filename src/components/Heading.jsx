/* * */
/* IMPORTS */
import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/* * */
/* * * * */
/* Heading.jsx
/*  This generic component returns a <Row><Col><h1> nested group.
/*
/*  Sensible defaults are set based on common needs.
/*  Basic customizations are possible via props.
/* * */

/* * */
/* * * * */
class Heading extends React.Component {
  defaults = {
    row: "text-center my-5 py-5",
    h1: { fontSize: 60, fontWeight: 700 }
  };

  render() {
    return (
      <Row className={this.props.row || this.defaults.row}>
        <Col>
          <h1 style={this.props.h1 || this.defaults.h1}>
            {this.props.text || "Heading"}
          </h1>
        </Col>
      </Row>
    );
  }
}

/* * */
export default Heading;
