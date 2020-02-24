/* * */
/* IMPORTS */
import React from "react";
import Settings from "get-settings";

import POSFeedback from "../POSFeedback";

import Container from "react-bootstrap/Container";

import Reloader from "../../../../utils/Reloader";

import Heading from "../../../common/generic/Heading";
import POSFSecondQuestionThankYouSwitch from "./POSFSecondQuestionThankYouSwitch";
import POSFSecondQuestionGrid from "./POSFSecondQuestionGrid";

/* * */
/* * * * */
/* POSFSecondQuestion.jsx
/*  This component displays a heading thanking the user for answering
/*  the first question plus a grid of cards for additional feedback.
/*
/*  It is responsible for updating POSFeedback in the database with additional feedback.
/* 
/* There is a Reloader component present that brings the app back to POSFFirstQuestion.
/* * */

/* * */
/* * * * */
class POSFSecondQuestion extends React.Component {
  /* * */
  /* PROPERTIES */

  // Store Location where POSF collection is taking place
  location = this.props.match.params.location;

  // What is the actual question the costumer is answering to
  questionTitle = Settings.get("POSF.second-question-title");

  // How much time of inactivity is allowed before app restart
  maxInactiveTimeAllowed = Settings.get("POSF.max-inactive-time-allowed");

  /* * */
  /* */

  /* function: getPreviousAnswerValue */
  // This method parses the search portion of the URL (everything after the "?"),
  // stores the key - value pairs in "params" and returns the
  // value answered in the First Question (FQAnswerValue).
  // This method is called from "POSFSecondaryQuestionThankYouSwitch".
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
      await new POSFeedback(this.props.match.params.id)
        .set("secondQuestionTitle", this.questionTitle)
        .set("secondQuestionAnswer", answer)
        .save();

      // Send user to the final Thank You page
      const path = "/POSF/" + this.location + "/thank-you";
      this.props.history.push(path);
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
      <React.Fragment>
        <Reloader
          seconds={this.maxInactiveTimeAllowed}
          path={"/POSF/" + this.location}
        />
        <Container>
          <POSFSecondQuestionThankYouSwitch
            value={this.getPreviousAnswerValue()}
          />
          <hr />
          <Heading
            text={this.questionTitle}
            row="text-center my-5"
            h1={{ fontSize: 40, fontWeight: 700 }}
          />
          <POSFSecondQuestionGrid onSelect={this.onSelect} />
        </Container>
      </React.Fragment>
    );
  }
}

/* * */
export default POSFSecondQuestion;
