/* * */
/* * * * * */
/* FIRST QUESTION */
/* * */

/* * */
/* IMPORTS */
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import http from '../services/httpService';

import Reloader from '../components/Reloader';
import Wrapper from '../components/Wrapper';
import Spacer from '../components/Spacer';
import Text from '../components/Text';
import Grid from '../components/Grid';
import LocationDebug from './LocationDebug';

/* * */
/* FIRST QUESTION */
/* This component displays the first question from the API. */
/* It saves the feedback to the spreadsheet by posting it to the backend */
/* and navigates the user away to the next question. It also has a Reloader */
/* component that tries to hard restart the app every few seconds. */
const FirstQuestion = ({ options, session, setSession }) => {
  //
  /* * URL Parameters
   * Retrieve the location from the URL. Location must be passed by the URL
   * because it is always available, even after full app reload.
   */
  const { location } = useParams();

  /* * Navigate
   * React Router API that navigates the user to another URL
   * while maintaing app state, as oposed to the window.location browser API.
   */
  const navigate = useNavigate();

  /* On Select
   * This method runs when the user clicks on an answer option.
   * It tries to set and save the Feedback to the backend and
   * direct the user to the next question page.
   */
  const onSelect = async (answer) => {
    //

    try {
      /* * Try Block
       * Build the Feedback object with values from the chosen answer,
       * try to post it to the backend, save the chosen answer and the
       * Feedback ID (from the backend response) to the current session
       * and navigate the use away to the next question.
       */

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

      // Save the chosen answer and the response ID to the current session
      setSession({ answer: answer, id: response.data.id });

      // Navigate the user to the next question
      navigate('/' + location + '/second');

      //
    } catch (err) {
      //
      /* * Catch Block
       * If an error occurs in any part of the above code, log the error
       * to the browser console and send the user the Error page.
       */

      console.log(err);
      navigate('/' + location + '/error');
    }
  };

  /* * Render
   * Draw the question title, a grid, a small location debug button
   * to go back to app root and a hidden Reloader to hard reload
   * the app every few seconds.
   */
  return (
    <React.Fragment>
      <Reloader hidden={true} speed={0.5} />
      <Wrapper>
        <Spacer height={120} />
        <Text mods={{ fontSize: 60 }}>{options.firstQuestionTitle}</Text>
        <Spacer height={80} />
        <Grid items={options.firstQuestionOptions} mods={{ idkey: 'value' }} callback={onSelect} />
        <LocationDebug location={location} />
      </Wrapper>
    </React.Fragment>
  );
};

/* * */
export default FirstQuestion;
