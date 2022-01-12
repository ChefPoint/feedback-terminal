/* * */
/* * * * * */
/* SPACER */
/* * */

/* * */
/* IMPORTS */
import React from 'react';

/* * */
/* SPACER */
/* This component draws a card with an ID, an Icon, a Label and a callback */
/* hook that is called when it is clicked. Card requires an object ‹params› */
/* with at least an id, an icon and a label, as well as a callback function */
/* that receives this params (allowing the parent function to pass data around). */
const Spacer = ({ height = 0, width = 0 }) => {
  //
  /* * Render
   * Draw the card, and conditionally display the loading indicator.
   * The icon and label size can be overridden by including an 'iconSize'
   * and 'labelSize' value in the provided params.
   */
  return <div className='spacer' style={{ paddingTop: height, paddingRight: width }}></div>;
};

/* * */
export default Spacer;
