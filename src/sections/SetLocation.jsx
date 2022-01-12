/* * */
/* * * * * */
/* SET LOCATION */
/* * */

/* * */
/* IMPORTS */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Text from '../components/Text';
import Grid from '../components/Grid';
import Wrapper from '../components/Wrapper';
import Spacer from '../components/Spacer';

import locations from '../settings/locations';

/* * */
/* SET LOCATION */
/* This component sets the URL path for the desired store location. */
/* Available store location are retrieved from Settings. */
const SetLocation = () => {
  //
  /* * Navigate
   * React Router API that navigates the user to another URL
   * while maintaing app state, as oposed to the window.location browser API.
   */
  const navigate = useNavigate();

  /* * Set URL Path
   * On choosing a location card, set the URL with the location ID.
   */
  const setURLPath = (params) => {
    navigate('/' + params.id);
  };

  /* * Render
   * Set a heading and a grid of location items.
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
