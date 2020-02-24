/* * */
/* IMPORTS */
import React from "react";

import Container from "react-bootstrap/Container";

import POSFThankYouHeading1 from "../thank-you-headings/POSFThankYouHeading1";
import POSFThankYouHeading2 from "../thank-you-headings/POSFThankYouHeading2";
import POSFThankYouHeading3 from "../thank-you-headings/POSFThankYouHeading3";
import POSFThankYouHeading4 from "../thank-you-headings/POSFThankYouHeading4";

/* * */
/* * * * */
/* POSFSecondaryQuestionThankYouSwitch.jsx
/*  This component displays a heading thanking the user
/*  for answering the first question.
/* * */

/* * */
/* * * * */
class POSFSecondQuestionThankYouSwitch extends React.Component {
  /* * */
  /* PROPERTIES */

  // Render the correct heading based on previous question
  // answer value, passed via props.
  headings = {
    1: <POSFThankYouHeading1 />,
    2: <POSFThankYouHeading2 />,
    3: <POSFThankYouHeading3 />,
    4: <POSFThankYouHeading4 />
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
export default POSFSecondQuestionThankYouSwitch;
