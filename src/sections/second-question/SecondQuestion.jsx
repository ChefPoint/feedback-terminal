/* * */
/* IMPORTS */
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import http from '../../services/httpService';

import Reloader from '../../components/Reloader';

import Player from '../../components/animation/Player';

import Wrapper from '../../components/Wrapper';
import Spacer from '../../components/Spacer';
import Text from '../../components/Text';
import Grid from '../../components/Grid';

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
const SecondQuestion = ({ options, session, setSession }) => {
  /* * */
  /* PROPERTIES */

  const navigate = useNavigate();

  // Store Location where POSF collection is taking place
  const { location } = useParams();

  /* function: getPreviousAnswerValue */
  // This method parses the search portion of the URL (everything after the "?"),
  // stores the key - value pairs in "params" and returns the
  // value answered in the First Question (FQAnswerValue).
  // This method is called from "SecondQuestionThankYouSwitch".

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
      await http.put('/' + session.id, feedbackItem);

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
      <Wrapper>
        <Player animationData={session.answer.animation} height={200} />
        <Text mods={{ fontSize: 30 }}>{session.answer.thankYouTitle}</Text>
        <Spacer height={20} />
        <Text mods={{ fontSize: 20 }}>{session.answer.thankYouText}</Text>
        <Spacer height={50} />
        {session.answer.shouldFollowUp && (
          <React.Fragment>
            <Text mods={{ fontSize: 40, fontWeight: 700 }}>{options.secondQuestionTitle}</Text>
            <Spacer height={40} />
            <Grid items={options.secondQuestionOptions} callback={onSelect} mods={{ idkey: 'value', iconSize: 60, labelSize: 25 }} />
          </React.Fragment>
        )}
      </Wrapper>
    </React.Fragment>
  );
};

export default SecondQuestion;
