/* * */
/* * * * * */
/* FINAL THANK YOU */
/* * */

/* * */
/* IMPORTS */
import React from 'react';
import { useParams } from 'react-router-dom';

import Player from '../components/Player';
import animation from '../media/animations/done.json';

import Wrapper from '../components/Wrapper';
import Spacer from '../components/Spacer';
import Text from '../components/Text';

/* * */
/* FINAL THANK YOU */
/* This function ends the app, and restarts it. */
const FinalThankYou = () => {
  //
  /* * URL Parameters : Location
   * Retrieve the location from the URL. Location must be passed by the URL
   * because it is always available, even after full app reload.
   */
  const { location } = useParams();

  /* * Restart App
   * This function runs after the animation in this component is complete.
   * The app is hard reloaded back to the first question, using the location
   * requested above from the URL.
   */
  const restartApp = () => {
    window.location.replace('/' + location);
  };

  /* * Render
   * Include an animation and some text thanking the user.
   */
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
