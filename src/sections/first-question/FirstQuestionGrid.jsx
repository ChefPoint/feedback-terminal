/* * */
/* IMPORTS */
import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FirstQuestionCard from './FirstQuestionCard';

/* * */
/* * * * */
/* FirstQuestionGrid.jsx
/*  This component produces a grid of cards based on chosen settings.
/* * */

/* * */
/* * * * */
const FirstQuestionGrid = ({ items, onSelect }) => {
  /* function: render */
  // This method should be pure, i.e. it should only return
  // components to be rendered. No logic should be present.

  return (
    <Row className='text-center my-3'>
      {items.map((option) => {
        return (
          <Col key={option.value}>
            <FirstQuestionCard option={option} onClick={onSelect} />
          </Col>
        );
      })}
    </Row>
  );
};

/* * */
export default FirstQuestionGrid;
