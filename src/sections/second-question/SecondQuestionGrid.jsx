/* * */
/* IMPORTS */
import React from "react";

import feedbackSession from "../../settings/feedback-session";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SecondQuestionCard from "./SecondQuestionCard";

/* * */
/* * * * */
/* SecondQuestionGrid.jsx
/*  This component produces a grid of cards based on chosen Settings.
/* * */

/* * */
/* * * * */
class SecondQuestionGrid extends React.Component {
  /* function: render */
  // This method should be pure, i.e. it should only return
  // components to be rendered. No logic should be present.
  render() {
    return (
      <Row className="text-center my-3">
        {feedbackSession["second-question-options"].map(option => {
          return (
            <Col key={option.value} md={3}>
              <SecondQuestionCard
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
export default SecondQuestionGrid;
