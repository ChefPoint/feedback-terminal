/* * */
/* * * * * */
/* SET LOCATION */
/* * */

/* * */
/* IMPORTS */
import React from 'react';

import Text from '../../components/Text';
import Grid from '../../components/Grid';
import Wrapper from '../../components/Wrapper';

import locations from '../../settings/locations';
import Spacer from '../../components/Spacer';

/* * */
/* SetLocation */
/* This component sets the URL path for the desired store location. */
/* Available store location are retrieved from Settings. */
const SetLocation = () => {
  //
  /* function: setURLPath */
  // On clicking the location card, set the url with the location ID.
  const setURLPath = (params) => {
    window.location.replace('/' + params.id);
  };

  /* * Render
   * Set a heading and a grid of items.
   */
  return (
    <Wrapper>
      <Spacer height={100} />
      <Text mods={{ fontSize: 60 }}>{'Select your store'}</Text>
      <Spacer height={70} />
      <Grid items={locations} callback={setURLPath} />
    </Wrapper>
  );
};

/* * */
export default SetLocation;
