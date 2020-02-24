/* * */
/* IMPORTS */
import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

/* * */
/* * * * */
/* POSFSetLocationToggleCustomInput.jsx
/*  This component is responsible only for toggling the Custom Input button.
/*  On user action props.onToggle is called to its parent component.
/*  Its label is passed via props based on showCustomInput value.
/* * */

/* * */
/* * * * */
class POSFSetLocationToggleCustomInput extends React.Component {
  /* function: render */
  // This method should be pure, i.e. it should only return
  // components to be rendered. No logic should be present.
  render() {
    return (
      <Row className="text-center my-5">
        <Col>
          <Button
            variant={this.props.showCustomInput ? "primary" : "outline-light"}
            onClick={this.props.onToggle}
          >
            {this.props.showCustomInput ? "Close" : "Custom Input"}
          </Button>
        </Col>
      </Row>
    );
  }
}

/* * */
export default POSFSetLocationToggleCustomInput;
