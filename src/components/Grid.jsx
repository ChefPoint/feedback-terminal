/* * */
/* * * * * */
/* GRID */
/* * */

/* * */
/* IMPORTS */
import React from 'react';
import Card from './Card';

/* * */
/* Grid */
/* This component produces a grid of cards based on provided items. */
const Grid = ({ items, callback, mods = {} }) => {
  //
  /* * Render
   * Map the provided items in a grid.
   */
  return (
    <div className='grid'>
      {items.map((item) => {
        return <Card key={item[mods.idkey ? mods.idkey : 'id']} params={item} callback={callback} mods={mods} />;
      })}
    </div>
  );
};

/* * */
export default Grid;
