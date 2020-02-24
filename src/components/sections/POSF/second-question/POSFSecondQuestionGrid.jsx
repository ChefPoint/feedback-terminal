/* * */
/* IMPORTS */
import React from "react";
import Settings from "get-settings";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import POSFSecondQuestionCard from "./POSFSecondQuestionCard";

/* * */
/* * * * */
/* POSFSecondQuestionGrid.jsx
/*  This component produces a grid of cards based on chosen Settings.
/* * */

/* * */
/* * * * */
class POSFSecondQuestionGrid extends React.Component {
  /* * */
  /* PROPERTIES */

  secondQuestionOptions = Settings.get("POSF.second-question-options");

  /* * */
  /* */

  /* function: render */
  // This method should be pure, i.e. it should only return
  // components to be rendered. No logic should be present.
  render() {
    return (
      <Row className="text-center my-3">
        {this.secondQuestionOptions.map(option => {
          return (
            <Col key={option.value} md={3}>
              <POSFSecondQuestionCard
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
export default POSFSecondQuestionGrid;
