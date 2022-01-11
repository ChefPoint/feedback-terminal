/* * */
/* IMPORTS */
import React from 'react';

import Player from '../../components/animation/Player';
import animation from '../../components/animation/files/done.json';
import { useParams } from 'react-router-dom';

import Wrapper from '../../components/Wrapper';
import Spacer from '../../components/Spacer';
import Text from '../../components/Text';

/* * */
/* * * * */
/* FinalThankYou.jsx
/*  This component displays the final thank you message
/*  and restarts the application back to the First Question.
/* * */

/* * */
/* * * * */
const FinalThankYou = () => {
  const { location } = useParams();

  /* function: restartApp */
  // This method is called after animation is complete.
  // It retrieves the location param from URL path and
  // sets the window location back to the first question.
  const restartApp = () => {
    window.location.replace('/' + location);
  };

  /* function: render */
  // This method should be pure, i.e. it should only return
  // components to be rendered. No logic should be present.
  return (
    <Wrapper>
      <Player animationData={animation} loop={false} speed={1.2} height={200} onComplete={restartApp} />
      <Text mods={{ fontSize: 40 }}>Thank you for your help.</Text>
      <Spacer height={50} />
      <Text mods={{ fontSize: 30 }}>Your answer has been recorded, and we will review it shortly.</Text>
    </Wrapper>
  );
};

/* * */
export default FinalThankYou;
