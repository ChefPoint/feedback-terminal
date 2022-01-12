/* * */
/* * * * * */
/* TEXT */
/* * */

/* * */
/* IMPORTS */
import React from 'react';

/* * */
/* TEXT */
/* This component is essentially a helper function for the <p> tag. */
const Text = ({ children, mods = {} }) => {
  return (
    <p className='text' style={{ fontSize: mods.fontSize ? mods.fontSize : null }}>
      {children}
    </p>
  );
};

/* * */
export default Text;
