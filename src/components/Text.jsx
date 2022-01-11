/* * */
/* IMPORTS */
import React from 'react';

/* * */
/* * * * */
/* Text.jsx
/*  This generic component returns a <Row><Col><h1> nested group.
/*
/*  Sensible defaults are set based on common needs.
/*  Basic customizations are possible via props.
/* * */

/* * */
/* * * * */
const Text = ({ children, mods = {} }) => {
  return (
    <p className='text' style={{ fontSize: mods.fontSize ? mods.fontSize : null }}>
      {children}
    </p>
  );
};

/* * */
export default Text;
