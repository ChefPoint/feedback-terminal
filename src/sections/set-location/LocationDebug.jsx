/* * */
/* IMPORTS */
import React from 'react';

/* * */
/* * * * */
/* LocationDebug.jsx
/*  This component only returns a link to SetLocation URL,
/*  getting its label text via props.
/* * */

/* * */
/* * * * */
const LocationDebug = ({ location }) => {
  /* function: render */
  // This method should be pure, i.e. it should only return
  // components to be rendered. No logic should be present.
  return (
    <a className='locationDebug' href='/'>
      Saving to: <strong>{location}</strong>
    </a>
  );
};

/* * */
export default LocationDebug;
