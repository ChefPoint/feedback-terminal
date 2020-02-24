/* * */
/* IMPORTS */
import React from "react";

import Container from "react-bootstrap/Container";

import feedbackSession from "../../settings/feedback-session";

import Feedback from "../Feedback";

import Reloader from "../../components/reloader/Reloader";

import Heading from "../../components/generic/Heading";
import SecondQuestionThankYouSwitch from "./SecondQuestionThankYouSwitch";
import SecondQuestionGrid from "./SecondQuestionGrid";

/* * */
/* * * * */
/* SecondQuestion.jsx
/*  This component displays a heading thanking the user for answering
/*  the first question plus a grid of cards for additional feedback.
/*
/*  It is responsible for updating POSFeedback in the database with additional feedback.
/* 
/* There is a Reloader component present that brings the app back to FirstQuestion.
/* * */

/* * */
/* * * * */
export default class SecondQuestion extends React.Component {
  /* * */
  /* PROPERTIES */

  // Store Location where POSF collection is taking place
  location = this.props.match.params.location;

  // What is the actual question the costumer is answering to
  questionTitle = feedbackSession["second-question-title"];

  /* * */
  /* */

  /* function: getPreviousAnswerValue */
  // This method parses the search portion of the URL (everything after the "?"),
  // stores the key - value pairs in "params" and returns the
  // value answered in the First Question (FQAnswerValue).
  // This method is called from "SecondQuestionThankYouSwitch".
  getPreviousAnswerValue = () => {
    const params = new URLSearchParams(this.props.location.search);
    const value = params.get("PreviousAnswerValue");
    return value;
  };

  /* function: onSelect */
  // This method is called via props when the user clicks on an option.
  // This method tries to set and save POSFeedback and directs the user
  // to the final Thank You page.
  onSelect = async answer => {
    try {
      // Try Setting & Saving POSFeedback Properties
      await new Feedback(this.props.match.params.id)
        .set("secondQuestionTitle", this.questionTitle)
        .set("secondQuestionAnswer", answer)
        .save();

      // Send user to the final Thank You page
      const path = "/" + this.location + "/thank-you";
      this.props.history.push(path);
    } catch (err) {
      // If an error occurs
      // Log the error and send the user to a generic error page.
      console.log(err);
      return window.location.replace("/" + this.location + "/error");
    }
  };

  /* function: render */
  // This method should be pure, i.e. it should only return
  // components to be rendered. No logic should be present.
  render() {
    return (
      <React.Fragment>
        <Reloader path={"/" + this.location} />
        <Container>
          <SecondQuestionThankYouSwitch value={this.getPreviousAnswerValue()} />
          <hr />
          <Heading
            text={this.questionTitle}
            row="text-center my-5"
            h1={{ fontSize: 40, fontWeight: 700 }}
          />
          <SecondQuestionGrid onSelect={this.onSelect} />
        </Container>
      </React.Fragment>
    );
  }
}
