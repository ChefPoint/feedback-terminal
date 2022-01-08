/* * */
/* IMPORTS */
import React from 'react';

import feedbackSession from '../../settings/feedback-session';
import Reloader from '../../components/Reloader';
import http from '../../services/httpService';

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
  const firstQuestionTitle = feedbackSession['first-question-title'];

  /* * */
  /* */

  const navigate = useNavigate();

  /* function: onSelect */
  // This method is called via props when the user clicks on an option.
  // This method tries to set and save Feedback and directs the user
  // to the next question page.
  const onSelect = async (answer) => {
    try {
      // Build the feedback object
      const feedbackItem = {
        session: feedbackSession['session-title'],
        location: location,
        firstQuestionTitle: firstQuestionTitle,
        firstQuestionAnswerIcon: answer.icon,
        firstQuestionAnswerLabel: answer.label,
        firstQuestionAnswerValue: answer.value,
      };

      // POST the feedbackItem to the API
      let response = await http.post('/', feedbackItem);

      // If successful, send user to the next question

      let urlParams = new URLSearchParams();
      urlParams.set('value', answer.value);
      urlParams.set('id', response.data.id);
      navigate('/' + location + '/second?' + urlParams);
    } catch (err) {
      // If an error occurs
      // Log the error and send the user to a generic error page.
      console.log(err);
      navigate('/' + location + '/error');
    }
  };

  /* function: render */
  // This method should be pure, i.e. it should only return
  // components to be rendered. No logic should be present.

  return (
    <React.Fragment>
      <Reloader hidden={false} speed={2} />
      <Container>
        <br /> <br /> <br />
        <Heading text={firstQuestionTitle} />
        <FirstQuestionGrid onSelect={onSelect} />
        <FirstQuestionLocationDebug location={location} />
      </Container>
    </React.Fragment>
  );
};

/* * */
export default FirstQuestion;
