/* * */
/* * * * * */
/* CARD */
/* * */

/* * */
/* IMPORTS */
import React, { useState } from 'react';

import Player from './animation/Player';
import animation from './animation/files/loading-ring.json';

/* * */
/* Card */
/* This component draws a card with an ID, an Icon, a Label and a callback */
/* hook that is called when it is clicked. Card requires an object ‹params› */
/* with at least an id, an icon and a label, as well as a callback function */
/* that receives this params (allowing the parent function to pass data around). */
const Card = ({ params, callback, mods = {} }) => {
  //
  /* * State : Loading
   * Used to show the loading indicator when the card is clicked.
   */
  const [loading, setLoading] = useState(false);

  /* * Clicked
   * This method is called when the user clicks the card.
   * It sets the 'loading' state property to true thus displaying
   * the loading component. It then invokes the provided callback
   * passing the received parameters.
   */
  const clicked = () => {
    setLoading(true);
    callback(params);
  };

  /* * Render
   * Draw the card, and conditionally display the loading indicator.
   * The icon and label size can be overridden by including an 'iconSize'
   * and 'labelSize' value in the provided params.
   */
  return (
    <div className='card' onClick={clicked}>
      {!loading && (
        <React.Fragment>
          <h1 className='icon' style={{ fontSize: mods.iconSize ? mods.iconSize : null }}>
            {params.icon}
          </h1>
          <h4 className='label' style={{ fontSize: mods.labelSize ? mods.labelSize : null }}>
            {params.label}
          </h4>
        </React.Fragment>
      )}
      {loading && <Player animationData={animation} height={150} />}
    </div>
  );
};

/* * */
export default Card;
