/* * */
/* IMPORTS */
import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Player from '../../components/animation/Player';
import animation from '../../components/animation/files/biking-is-cool.json';
import Heading from '../../components/Heading';

/* * */
/* * * * */
const ThankYouHeading3 = () => {
  return (
    <React.Fragment>
      <Player animationData={animation} height={200} />
      <Row className='text-center my-5'>
        <Col>
          <h1>Thank you very much for your answer!</h1>
          <br />
          <Heading text={'Your happiness is our motivation.'} row='text-center my-2' h1={{ fontSize: 60, fontWeight: 700, color: '#eb5e00' }} />
        </Col>
      </Row>
    </React.Fragment>
  );
};

/* * */
export default ThankYouHeading3;
