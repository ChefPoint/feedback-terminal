/* * */
/* * * * * */
/* WRAPPER */
/* * */

/* * */
/* IMPORTS */
import React from 'react';

/* * */
/* Wrapper */
/* This component draws a card with an ID, an Icon, a Label and a callback */
/* hook that is called when it is clicked. Card requires an object ‹params› */
/* with at least an id, an icon and a label, as well as a callback function */
/* that receives this params (allowing the parent function to pass data around). */
const Wrapper = ({ children }) => {
  //
  /* * Render
   * Draw the card, and conditionally display the loading indicator.
   * The icon and label size can be overridden by including an 'iconSize'
   * and 'labelSize' value in the provided params.
   */
  return <div className='wrapper'>{children}</div>;
};

/* * */
export default Wrapper;
