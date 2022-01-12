/* * */
/* * * * * */
/* LOADING */
/* * */

/* * */
/* IMPORTS */
import React from 'react';

import Player from './Player';
import loadingDots from '../media/animations/loading-dots.json';

/* * */
/* LOADING */
/* Simply draw a player with the loading dots animation in full size. */
const Loading = () => {
  return <Player animationData={loadingDots} height={800} />;
};

/* * */
export default Loading;
