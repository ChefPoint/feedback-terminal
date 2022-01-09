/* * */
/* IMPORTS */
import React from 'react';

import Container from 'react-bootstrap/Container';

import http from '../../services/httpService';

import Reloader from '../../components/Reloader';

import Heading from '../../components/Heading';
import SecondQuestionThankYouSwitch from './SecondQuestionThankYouSwitch';
import SecondQuestionGrid from './SecondQuestionGrid';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

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
const SecondQuestion = ({ options }) => {
  /* * */
  /* PROPERTIES */

  const navigate = useNavigate();

  // Store Location where POSF collection is taking place
  const { location } = useParams();
  const { search } = useLocation();

  /* function: getPreviousAnswerValue */
  // This method parses the search portion of the URL (everything after the "?"),
  // stores the key - value pairs in "params" and returns the
  // value answered in the First Question (FQAnswerValue).
  // This method is called from "SecondQuestionThankYouSwitch".
  const urlParams = new URLSearchParams(search);
  const firstAnswerValue = urlParams.get('value');

  /* function: onSelect */
  // This method is called via props when the user clicks on an option.
  // This method tries to set and save POSFeedback and directs the user
  // to the final Thank You page.
  const onSelect = async (answer) => {
    try {
      const feedbackItem = {
        location: location,
        secondQuestionTitle: options.secondQuestionTitle,
        secondQuestionAnswerIcon: answer.icon,
        secondQuestionAnswerLabel: answer.label,
        secondQuestionAnswerValue: answer.value,
      };

      // POST the feedbackItem to the API
      await http.put('/' + urlParams.get('id'), feedbackItem);

      // Send user to the final Thank You page
      navigate('/' + location + '/thank-you');
    } catch (err) {
      // If an error occurs
      // Log the error and send the user to a generic error page.
      console.log(err);
      navigate('/' + location + '/error');
    }
  };

  /* * */
  /* */

  /* function: render */
  // This method should be pure, i.e. it should only return
  // components to be rendered. No logic should be present.
  return (
    <React.Fragment>
      <Reloader path={'/' + location} />
      <Container>
        <SecondQuestionThankYouSwitch value={firstAnswerValue} />
        <Heading text={options.secondQuestionTitle} row='text-center my-2' h1={{ fontSize: 40, fontWeight: 700 }} />
        <SecondQuestionGrid items={options.secondQuestionOptions} onSelect={onSelect} />
      </Container>
    </React.Fragment>
  );
};

export default SecondQuestion;
