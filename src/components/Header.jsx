/* * */
/* * * * * */
/* HEADER */
/* * */

/* * */
/* IMPORTS */
import React from 'react';

import Player from './Player';
import Text from './Text';
import Spacer from './Spacer';

/* * */
/* HEADER */
/* This component encapsulates a Player and two Text components. */
const Header = ({ animation, title, subtitle }) => {
  return (
    <React.Fragment>
      <Player animationData={animation} height={200} />
      <Text mods={{ fontSize: 30 }}>{title}</Text>
      <Spacer height={20} />
      <Text mods={{ fontSize: 20 }}>{subtitle}</Text>
    </React.Fragment>
  );
};

/* * */
export default Header;
