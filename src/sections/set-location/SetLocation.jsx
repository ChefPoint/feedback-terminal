/* * */
/* IMPORTS */
import React from 'react';

import Container from 'react-bootstrap/Container';
import Heading from '../../components/Heading';

import SetLocationGrid from './SetLocationGrid';
import SetLocationToggleCustomInput from './SetLocationToggleCustomInput';
import SetLocationCustomInput from './SetLocationCustomInput';
import { Navigate } from 'react-router';

/* * */
/* * * * */
/* SetLocation.jsx
/*  This component sets the URL path for the desired store location.
/*  Available store location are retrieved from Settings.
/*  It is also possible to input a custom URL for on-the-field tests.
/* * */

/* * */
/* * * * */
const SetLocation = ({ session }) => {
  /* * */
  /* PROPERTIES */

  let state = {
    showCustomInput: false,
  };

  /* * */
  /* */

  /* function: setURLPath */
  // This method is called via props when the user chooses a default option
  // or submits the form. The URL path is replaced so that this page is
  // not available in the device history.
  const setURLPath = (location) => {
    window.location.replace('/' + location);
  };

  /* function: toggleCustomInput */
  // This method simply toggles the 'showCustomInput' state property,
  // then displaying or hiding the custom input components.
  const toggleCustomInput = () => {
    state.showCustomInput = !state.showCustomInput;
  };

  /* function: render */
  // This method should be pure, i.e. it should only return
  // components to be rendered. No logic should be present.

  return (
    <Container>
      {/* Default Locations */}
      <Heading text='Select your store' />
      <SetLocationGrid onSelect={setURLPath} />

      {/* Toggle Custom Input */}
      <SetLocationToggleCustomInput showCustomInput={state.showCustomInput} onToggle={toggleCustomInput} />

      {/* Custom Input Form */}
      {state.showCustomInput && <SetLocationCustomInput onSubmit={setURLPath} />}
    </Container>
  );
};

/* * */
export default SetLocation;
