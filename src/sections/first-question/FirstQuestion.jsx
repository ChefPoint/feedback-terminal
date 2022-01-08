/* * */
/* IMPORTS */
import React from 'react';

import feedbackSession from '../../settings/feedback-session';

import Feedback from '../Feedback';

import { useParams, useNavigate } from 'react-router';

import Container from 'react-bootstrap/Container';
import Heading from '../../components/Heading';

import FirstQuestionGrid from './FirstQuestionGrid';
import FirstQuestionLocationDebug from './FirstQuestionLocationDebug';

/* * */
/* * * * */
/* FirstQuestion.jsx
/*  This component displays a grid of cards and is responsible
/*  for saving Feedback object to the database and setting
/*  the URL path with its ID for the next question.
/*
/*  A small label is also presented for in-the-field tests.
/* * */

/* * */
/* * * * */
const FirstQuestion = () => {
  /* * */
  /* PROPERTIES */

  // Store Location where feedback collection is taking place
  const { location } = useParams();

  // What is the actual question the costumer is answering to
  const questionTitle = feedbackSession['first-question-title'];

  /* * */
  /* */

  const navigate = useNavigate();

  /* function: onSelect */
  // This method is called via props when the user clicks on an option.
  // This method tries to set and save Feedback and directs the user
  // to the next question page.
  const onSelect = async (answer) => {
    try {
      // Create a new instance of Feedback
      let feedbackItem = new Feedback();
      feedbackItem.set('session', feedbackSession['session-title']);
      feedbackItem.set('location', location);
      feedbackItem.set('firstQuestionTitle', questionTitle);
      feedbackItem.set('firstQuestionAnswer', answer);
      await feedbackItem.save();

      // Send user to the next question
      const path = '/' + location + '/second/' + feedbackItem.get('id');
      let urlParams = new URLSearchParams();
      urlParams.set('PreviousAnswerValue', answer.value);
      urlParams.set('id', feedbackItem.get('id'));
      navigate(path + '?' + urlParams);
    } catch (err) {
      // If an error occurs
      // Log the error and send the user to a generic error page.
      console.log(err);
      return window.location.replace('/' + this.location + '/error');
    }
  };

  /* function: render */
  // This method should be pure, i.e. it should only return
  // components to be rendered. No logic should be present.

  return (
    <Container>
      <Heading text={questionTitle} />
      <FirstQuestionGrid onSelect={onSelect} />
      <FirstQuestionLocationDebug location={location} />
    </Container>
  );
};

/* * */
export default FirstQuestion;
