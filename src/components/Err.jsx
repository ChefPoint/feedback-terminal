/* * */
/* * * * * */
/* ERROR */
/* * */

/* * */
/* IMPORTS */
import React from 'react';
import { useParams } from 'react-router-dom';

import Player from './Player';
import animation from '../media/animations/floating-ninja.json';

import Reloader from './Reloader';
import Wrapper from './Wrapper';
import Text from './Text';
import Spacer from './Spacer';

/* * */
/* ERR */
/* This component is shown when an error is detected. */
/* It restarts the app after some time has passed. */
const Err = () => {
  //
  /* * URL Parameters : Location
   * Retrieve the location from the URL. Location must be passed by the URL
   * because it is always available, even after full app reload.
   */
  const { location } = useParams();

  /* * Render
   * Include an animation and some text thanking the user.
   */
  return (
    <React.Fragment>
      <Reloader speed={3} path={'/' + location} />
      <Wrapper>
        <Player animationData={animation} height={200} speed={0.8} />
        <Spacer height={50} />
        <Text mods={{ fontSize: 40 }}>An unexpected error occurred.</Text>
        <Spacer height={20} />
        <Text mods={{ fontSize: 30 }}>Please try again.</Text>
        <Spacer height={40} />
        <Text>If the error persists please inform the shop or send an email to support@chefpoint.pt</Text>
      </Wrapper>
    </React.Fragment>
  );
};

export default Err;
