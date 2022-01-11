/* * */
/* IMPORTS */
import React from 'react';

import Reloader from './Reloader';

import { useParams, Navigate } from 'react-router-dom';

import Player from './animation/Player';
import animation from './animation/files/floating-ninja.json';
import Wrapper from './Wrapper';

/* * */
/* * * * */
const Err = () => {
  /* * */
  /* PROPERTIES */

  // Store Location where POSF collection is taking place
  const { location } = useParams();

  const restartApp = () => {
    Navigate('/' + location);
  };

  /* * */
  /* */

  /* function: render */
  // This method should be pure, i.e. it should only return
  // components to be rendered. No logic should be present.
  return (
    <React.Fragment>
      <Reloader speed={3} path={'/' + location} />
      <Wrapper>
        <Player animationData={animation} speed={0.8} height={200} onComplete={restartApp} />
        <h1>An unexpected error occurred.</h1>
        <br />
        <h2>Please try again.</h2>
        <br />
        <h4>
          If the error persists please inform the shop or send an email to <strong>support@chefpoint.pt</strong>
        </h4>
      </Wrapper>
    </React.Fragment>
  );
};

export default Err;
