/* * */
/* IMPORTS */
import React from "react";

import Container from "react-bootstrap/Container";

import ThankYouHeading1 from "../thank-you-headings/ThankYouHeading1";
import ThankYouHeading2 from "../thank-you-headings/ThankYouHeading2";
import ThankYouHeading3 from "../thank-you-headings/ThankYouHeading3";
import ThankYouHeading4 from "../thank-you-headings/ThankYouHeading4";

/* * */
/* * * * */
/* SecondaryQuestionThankYouSwitch.jsx
/*  This component displays a heading thanking the user
/*  for answering the first question.
/* * */

/* * */
/* * * * */
class SecondQuestionThankYouSwitch extends React.Component {
  /* * */
  /* PROPERTIES */

  // Render the correct heading based on previous question
  // answer value, passed via props.
  headings = {
    1: <ThankYouHeading1 />,
    2: <ThankYouHeading2 />,
    3: <ThankYouHeading3 />,
    4: <ThankYouHeading4 />
  };

  /* * */
  /* */

  /* function: render */
  // This method should be pure, i.e. it should only return
  // components to be rendered. No logic should be present.
  render() {
    return <Container>{this.headings[this.props.value]}</Container>;
  }
}

/* * */
export default SecondQuestionThankYouSwitch;
