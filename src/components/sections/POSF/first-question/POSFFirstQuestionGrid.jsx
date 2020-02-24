/* * */
/* IMPORTS */
import React from "react";
import Settings from "get-settings";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import POSFFirstQuestionCard from "./POSFFirstQuestionCard";

/* * */
/* * * * */
/* POSFFirstQuestionGrid.jsx
/*  This component produces a grid of cards based on chosen Settings.
/* * */

/* * */
/* * * * */
class POSFFirstQuestionGrid extends React.Component {
  /* * */
  /* PROPERTIES */

  firstQuestionOptions = Settings.get("POSF.first-question-options");

  /* * */
  /* */

  /* function: render */
  // This method should be pure, i.e. it should only return
  // components to be rendered. No logic should be present.
  render() {
    return (
      <Row className="text-center my-3">
        {this.firstQuestionOptions.map(option => {
          return (
            <Col key={option.value}>
              <POSFFirstQuestionCard
                option={option}
                onClick={this.props.onSelect}
              />
            </Col>
          );
        })}
      </Row>
    );
  }
}

/* * */
export default POSFFirstQuestionGrid;
