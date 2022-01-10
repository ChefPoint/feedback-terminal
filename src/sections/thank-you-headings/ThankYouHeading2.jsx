/* * */
/* IMPORTS */
import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Player from '../../components/animation/Player';
import animation from '../../components/animation/files/biking-is-cool.json';

/* * */
/* * * * */
const ThankYouHeading2 = () => {
  return (
    <React.Fragment>
      <Player animationData={animation} height={180} />
      <Row className='text-center my-4'>
        <Col>
          <h1>Thank you for your answer!</h1>
        </Col>
      </Row>
    </React.Fragment>
  );
};

/* * */
export default ThankYouHeading2;
