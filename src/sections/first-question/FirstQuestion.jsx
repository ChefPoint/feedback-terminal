/* * */
/* * * * * */
/* FIRST QUESTION */
/* * */

/* * */
/* IMPORTS */
import React from 'react';

import Reloader from '../../components/Reloader';
import http from '../../services/httpService';

import { useParams, useNavigate } from 'react-router';
import animation from '../../components/animation/files/loading-dots.json';

import Text from '../../components/Text';
import Grid from '../../components/Grid';

import LocationDebug from '../set-location/LocationDebug';
import Player from '../../components/animation/Player';
import Wrapper from '../../components/Wrapper';
import Spacer from '../../components/Spacer';

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
const FirstQuestion = ({ options, session, setSession }) => {
  /* * */
  /* PROPERTIES */

  // Store Location where feedback collection is taking place
  const { location } = useParams();

  const navigate = useNavigate();

  /* function: onSelect */
  // This method is called via props when the user clicks on an option.
  // This method tries to set and save Feedback and directs the user
  // to the next question page.
  const onSelect = async (answer) => {
    try {
      // Build the feedback object
      const feedbackItem = {
        location: location,
        firstQuestionTitle: options.firstQuestionTitle,
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
      setSession({ answer: answer, id: response.data.id });
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
      {!options && <Player animationData={animation} height={800} />}
      {options && (
        <React.Fragment>
          <Reloader hidden={true} speed={0.25} />
          <Wrapper>
            <Spacer height={120} />
            <Text mods={{ fontSize: 60 }}>{options.firstQuestionTitle}</Text>
            <Spacer height={80} />
            <Grid items={options.firstQuestionOptions} mods={{ idkey: 'value' }} callback={onSelect} />
            <LocationDebug location={location} />
          </Wrapper>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

/* * */
export default FirstQuestion;
