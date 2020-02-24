/* * */
/* IMPORTS */
import React from "react";

import feedbackSession from "../../settings/feedback-session";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FirstQuestionCard from "./FirstQuestionCard";

/* * */
/* * * * */
/* FirstQuestionGrid.jsx
/*  This component produces a grid of cards based on chosen settings.
/* * */

/* * */
/* * * * */
class FirstQuestionGrid extends React.Component {
  /* function: render */
  // This method should be pure, i.e. it should only return
  // components to be rendered. No logic should be present.
  render() {
    return (
      <Row className="text-center my-3">
        {feedbackSession["first-question-options"].map(option => {
          return (
            <Col key={option.value}>
              <FirstQuestionCard
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
export default FirstQuestionGrid;
