/* * */
/* IMPORTS */
import React from "react";
import Settings from "get-settings";

import POSFeedback from "../POSFeedback";

import Container from "react-bootstrap/Container";
import Heading from "../../../common/generic/Heading";

import POSFFirstQuestionGrid from "./POSFFirstQuestionGrid";
import POSFFirstQuestionLocationDebug from "./POSFFirstQuestionLocationDebug";

/* * */
/* * * * */
/* POSFFirstQuestion.jsx
/*  This component displays a grid of cards and is responsible
/*  for saving POSFeedback object to the database and setting
/*  the URL path with its ID for the next question.
/*
/*  A small label is also presented for in-the-field tests.
/* * */

/* * */
/* * * * */
class POSFFirstQuestion extends React.Component {
  /* * */
  /* PROPERTIES */

  // Required property to identify the Feedback Collection Session
  session = Settings.get("POSF.feedback-session");

  // Store Location where POSF collection is taking place
  location = this.props.match.params.location;

  // What is the actual question the costumer is answering to
  questionTitle = Settings.get("POSF.first-question-title");

  /* * */
  /* */

  /* function: onSelect */
  // This method is called via props when the user clicks on an option.
  // This method tries to set and save POSFeedback and directs the user
  // to the next question page.
  onSelect = async answer => {
    try {
      // Try Setting & Saving POSFeedback Properties
      const feedbackID = await new POSFeedback()
        .set("session", this.session)
        .set("location", this.location)
        .set("firstQuestionTitle", this.questionTitle)
        .set("firstQuestionAnswer", answer)
        .save();

      // Send user to the next question
      const path = "/POSF/" + this.location + "/second/" + feedbackID;
      const query = "?PreviousAnswerValue=" + answer.value;
      this.props.history.push(path + query);
    } catch (err) {
      // If an error occurs
      // Log the error and send the user to a generic error page.
      console.log(err);
      return window.location.replace("/POSF/" + this.location + "/error");
    }
  };

  /* function: render */
  // This method should be pure, i.e. it should only return
  // components to be rendered. No logic should be present.
  render() {
    return (
      <Container>
        <Heading text={this.questionTitle} />
        <POSFFirstQuestionGrid onSelect={this.onSelect} />
        <POSFFirstQuestionLocationDebug location={this.location} />
      </Container>
    );
  }
}

/* * */
export default POSFFirstQuestion;
